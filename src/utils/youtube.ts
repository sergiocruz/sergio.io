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
 * Generate comprehensive YouTube thumbnail URLs with fallbacks
 * Returns an object with multiple quality options
 */
export function getYouTubeThumbnailUrls(videoId: string) {
  if (!videoId) return { primary: '', fallback: '', standard: '' };
  
  return {
    // Highest quality (1280x720) - not always available
    primary: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
    // High quality (480x360) - more reliable
    fallback: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
    // Standard quality (120x90) - always available
    standard: `https://img.youtube.com/vi/${videoId}/default.jpg`
  };
}

/**
 * Generate YouTube thumbnail URL from video ID
 * Uses maxresdefault for high quality (kept for backward compatibility)
 */
export function getYouTubeThumbnailUrl(videoId: string): string {
  if (!videoId) return '';
  
  // Use maxresdefault for highest quality (1280x720)
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}

/**
 * Generate a CSS background-image string with fallbacks
 * This creates a comma-separated list of background images that the browser
 * will try in order, falling back to the next if one fails to load
 */
export function getYouTubeThumbnailFallbackCSS(videoId: string): string {
  if (!videoId) return '';
  
  const urls = getYouTubeThumbnailUrls(videoId);
  
  // CSS will try these in order - if maxresdefault fails, it tries hqdefault, then default
  return `url(${urls.primary}), url(${urls.fallback}), url(${urls.standard})`;
}