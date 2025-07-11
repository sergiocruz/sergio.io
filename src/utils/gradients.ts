/**
 * Gradient utility functions and safelist for Tailwind CSS
 */

/**
 * Get gradient classes for different content types
 */
export const getGradientClass = (index: number, type: string) => {
  const gradients = {
    course: [
      'from-blue-400 to-purple-600',
      'from-green to-blue-500',
      'from-orange-400 to-red-500',
      'from-teal-400 to-blue-600',
    ],
    video: [
      'from-primary-400 to-primary-600',
      'from-green to-primary-500',
      'from-pink to-primary-600',
      'from-yellow to-primary-500',
    ],
    'video-overlay': [
      'from-primary-400-overlay to-primary-600-overlay',
      'from-green-overlay to-primary-500-overlay',
      'from-pink-overlay to-primary-600-overlay',
      'from-yellow-overlay to-primary-500-overlay',
    ],
    publication: [
      'from-primary-400 to-primary-600',
      'from-green to-primary-500',
      'from-pink to-primary-600',
    ],
  };

  const typeGradients = gradients[type] || gradients.video;
  return typeGradients[index % typeGradients.length];
};

/**
 * All gradient classes used by getGradientClass - for Tailwind safelist
 * This ensures Tailwind's static analysis picks up all classes
 */
export const tailwindSafelistGradients = [
  // Course gradients
  'from-blue-400',
  'to-purple-600',
  'from-green',
  'to-blue-500',
  'from-orange-400',
  'to-red-500',
  'from-teal-400',
  'to-blue-600',

  // Video gradients
  'from-primary-400',
  'to-primary-600',
  'to-primary-500',
  'from-pink',
  'from-yellow',

  // Video overlay gradients
  'from-primary-400-overlay',
  'to-primary-600-overlay',
  'from-green-overlay',
  'to-primary-500-overlay',
  'from-pink-overlay',
  'from-yellow-overlay',

  // Combined gradient classes
  'bg-gradient-to-br',
  'from-blue-400 to-purple-600',
  'from-green to-blue-500',
  'from-orange-400 to-red-500',
  'from-teal-400 to-blue-600',
  'from-primary-400 to-primary-600',
  'from-green to-primary-500',
  'from-pink to-primary-600',
  'from-yellow to-primary-500',
  'from-primary-400-overlay to-primary-600-overlay',
  'from-green-overlay to-primary-500-overlay',
  'from-pink-overlay to-primary-600-overlay',
  'from-yellow-overlay to-primary-500-overlay',
  'from-pink to-primary-600',
];
