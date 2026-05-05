import { LazyImage } from '@/Components/LazyWrapper';

export default function ExampleComponentWithLazyImages() {
    return (
        <div className="space-y-8">
            {/* Regular lazy loaded image */}
            <LazyImage
                src="https://example.com/large-image.jpg"
                alt="Description"
                className="w-full h-64 object-cover rounded-lg"
                lazyOptions={{ rootMargin: '50px 0px' }}
            />

            {/* Lazy image with custom placeholder */}
            <LazyImage
                src="https://example.com/another-image.jpg"
                alt="Another description"
                className="w-full h-96 object-cover rounded-lg"
                placeholder={
                    <div className="w-full h-96 bg-blue-100 rounded-lg flex items-center justify-center">
                        <div className="text-blue-500">Custom loading placeholder</div>
                    </div>
                }
                lazyOptions={{ threshold: 0.2 }}
            />

            {/* Multiple images in a grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((index) => (
                    <LazyImage
                        key={index}
                        src={`https://picsum.photos/400/300?random=${index}`}
                        alt={`Random image ${index}`}
                        className="w-full h-48 object-cover rounded"
                        lazyOptions={{ rootMargin: '20px 0px' }}
                    />
                ))}
            </div>
        </div>
    );
}
