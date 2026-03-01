import { useState } from 'react';

const ImageSkeleton = ({ aspectRatio = "aspect-[3/4]" }) => {
  return (
    <div className={`${aspectRatio} bg-gray-200 animate-pulse`}>
      <div className="w-full h-full flex items-center justify-center">
        <svg 
          className="w-12 h-12 text-gray-400" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
          />
        </svg>
      </div>
    </div>
  );
};

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '',
  loading = 'lazy',
  aspectRatio = 'aspect-[3/4]',
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  
  // Convert .jpg to .webp for source
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  
  return (
    <div className="relative w-full h-full">
      {/* Skeleton Loader */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0">
          <ImageSkeleton aspectRatio={aspectRatio} />
        </div>
      )}
      
      {/* Actual Image */}
      <picture className={isLoaded ? 'block' : 'hidden'}>
        <source srcSet={webpSrc} type="image/webp" />
        <img 
          src={src} 
          alt={alt} 
          loading={loading}
          className={`${className} transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            setHasError(true);
            setIsLoaded(true); // Show original image on error
          }}
          {...props}
        />
      </picture>
      
      {/* Error State (optional) */}
      {hasError && !isLoaded && (
        <div className={`${aspectRatio} bg-gray-100 flex items-center justify-center`}>
          <p className="text-gray-400 text-sm">Image unavailable</p>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
