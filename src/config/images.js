// Image configuration
const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL || '/images'

export const getImageUrl = (imagePath) => {
  // Remove leading slash if present
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath
  return `${IMAGE_BASE_URL}/${cleanPath}`
}

// Export base URL for direct use
export const imageBaseUrl = IMAGE_BASE_URL