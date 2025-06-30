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