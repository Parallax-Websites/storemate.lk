import { lazy, Suspense } from 'react';
import { useLazyLoad, useLazyImage } from '@/hooks/useLazyLoad';

/**
 * LazyWrapper component for lazy loading any component based on intersection
 * @param {Object} props
 * @param {React.ComponentType} props.component - Component to lazy load
 * @param {React.ReactNode} props.fallback - Loading component
 * @param {Object} props.lazyOptions - Lazy load options
 * @param {Object} props.componentProps - Props to pass to the lazy component
 */
const LazyWrapper = ({
    component: Component,
    fallback = <div className="h-20 animate-pulse bg-gray-200 rounded"></div>,
    lazyOptions = {},
    ...componentProps
}) => {
    const { ref, isLoaded } = useLazyLoad(lazyOptions);

    return (
        <div ref={ref}>
            {isLoaded ? (
                <Suspense fallback={fallback}>
                    <Component {...componentProps} />
                </Suspense>
            ) : (
                fallback
            )}
        </div>
    );
};

/**
 * Higher-order component for creating lazy-loaded components
 * @param {React.ComponentType} Component - Component to make lazy
 * @param {Object} options - Lazy load options
 */
export const withLazyLoad = (Component, options = {}) => {
    return (props) => (
        <LazyWrapper
            component={Component}
            lazyOptions={options}
            {...props}
        />
    );
};

/**
 * LazyImage component with intersection observer
 */
export const LazyImage = ({
    src,
    alt,
    className = '',
    placeholder = null,
    lazyOptions = {},
    ...props
}) => {
    const { ref, src: lazySrc, isLoaded, error } = useLazyImage(src, lazyOptions);

    const defaultPlaceholder = (
        <div className={`bg-gray-200 animate-pulse ${className}`} style={{ aspectRatio: '16/9' }}>
            <div className="flex items-center justify-center h-full text-gray-400">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
            </div>
        </div>
    );

    return (
        <div ref={ref}>
            {error ? (
                <div className={`bg-red-100 text-red-500 flex items-center justify-center ${className}`}>
                    Failed to load image
                </div>
            ) : isLoaded && lazySrc ? (
                <img
                    src={lazySrc}
                    alt={alt}
                    className={className}
                    {...props}
                />
            ) : (
                placeholder || defaultPlaceholder
            )}
        </div>
    );
};

export default LazyWrapper;
