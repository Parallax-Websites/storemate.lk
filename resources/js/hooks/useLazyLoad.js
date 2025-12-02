import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook for lazy loading components based on intersection observer
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Intersection threshold (0-1)
 * @param {string} options.rootMargin - Root margin for early loading
 * @param {boolean} options.triggerOnce - Whether to trigger only once
 * @returns {Object} - { ref, isIntersecting, isLoaded }
 */
export const useLazyLoad = (options = {}) => {
    const {
        threshold = 0.1,
        rootMargin = '50px 0px',
        triggerOnce = true
    } = options;

    const [isIntersecting, setIsIntersecting] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsIntersecting(true);
                    setIsLoaded(true);

                    if (triggerOnce) {
                        observer.unobserve(element);
                    }
                } else if (!triggerOnce) {
                    setIsIntersecting(false);
                }
            },
            {
                threshold,
                rootMargin
            }
        );

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [threshold, rootMargin, triggerOnce]);

    return {
        ref: elementRef,
        isIntersecting,
        isLoaded
    };
};

/**
 * Custom hook for lazy loading images
 * @param {string} src - Image source URL
 * @param {Object} options - Lazy load options
 * @returns {Object} - { ref, src: actualSrc, isLoaded, error }
 */
export const useLazyImage = (src, options = {}) => {
    const { ref, isIntersecting } = useLazyLoad(options);
    const [imageSrc, setImageSrc] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (isIntersecting && src) {
            const img = new Image();

            img.onload = () => {
                setImageSrc(src);
                setIsLoaded(true);
                setError(false);
            };

            img.onerror = () => {
                setError(true);
                setIsLoaded(false);
            };

            img.src = src;
        }
    }, [isIntersecting, src]);

    return {
        ref,
        src: imageSrc,
        isLoaded,
        error
    };
};
