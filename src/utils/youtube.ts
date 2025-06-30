import sizeOf from 'image-size';

/**
 * YouTube utility functions for extracting video IDs and generating thumbnail URLs
 */

/**
 * Extract YouTube video ID from various YouTube URL formats
 * Supports:
 * - https://youtu.be/VIDEO_ID
 * - https://www.youtube.com/watch?v=VIDEO_ID
 * - https://youtube.com/watch?v=VIDEO_ID
 */
export function getYouTubeVideoId(url: string): string | null {
  if (!url) return null;
  
  try {
    const urlObj = new URL(url);
    
    // Handle youtu.be format
    if (urlObj.hostname === 'youtu.be') {
      return urlObj.pathname.slice(1); // Remove leading slash
    }
    
    // Handle youtube.com format
    if (urlObj.hostname.includes('youtube.com')) {
      return urlObj.searchParams.get('v');
    }
    
    return null;
  } catch (error) {
    console.warn('Invalid YouTube URL:', url);
    return null;
  }
}

/**
 * Generate YouTube thumbnail URL from video ID
 * Uses maxresdefault for high quality, falls back to hqdefault if needed
 */
export function getYouTubeThumbnailUrl(videoId: string): string {
  if (!videoId) return '';
  
  // Use maxresdefault for highest quality (1280x720)
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}

/**
 * Generate fallback YouTube thumbnail URL
 * Uses hqdefault (480x360) as a more reliable fallback
 */
export function getYouTubeThumbnailFallbackUrl(videoId: string): string {
  if (!videoId) return '';
  
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

/**
 * Validate YouTube thumbnail by checking if it's a real image (not a placeholder)
 * Returns the best available thumbnail URL or null if no valid thumbnail is found
 */
export async function getValidatedYouTubeThumbnailUrl(videoUrl: string): Promise<string | null> {
  const videoId = getYouTubeVideoId(videoUrl);
  if (!videoId) return null;

  // Try maxresdefault first (1280x720)
  const maxResUrl = getYouTubeThumbnailUrl(videoId);
  const maxResResult = await validateThumbnail(maxResUrl, 1280, 720);
  if (maxResResult) return maxResUrl;

  // Fallback to hqdefault (480x360)
  const hqUrl = getYouTubeThumbnailFallbackUrl(videoId);
  const hqResult = await validateThumbnail(hqUrl, 480, 360);
  if (hqResult) return hqUrl;

  // No valid thumbnail found
  return null;
}

/**
 * Validate a thumbnail URL by fetching it and checking dimensions
 */
async function validateThumbnail(url: string, expectedWidth: number, expectedHeight: number): Promise<boolean> {
  try {
    const response = await fetch(url);
    if (!response.ok) return false;

    const buffer = await response.arrayBuffer();
    const dimensions = sizeOf(new Uint8Array(buffer));

    // Check if dimensions match expected values for real thumbnails
    return dimensions.width === expectedWidth && dimensions.height === expectedHeight;
  } catch (error) {
    console.warn(`Failed to validate thumbnail ${url}:`, error);
    return false;
  }
}