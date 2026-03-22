import Image from 'next/image';
import Link from 'next/link';

export default function YouMayAlsoLike({ currentBookId, books }) {
  // Filter out the current book and get 3 related books
  const relatedBooks = books
    .filter(book => book.id !== currentBookId)
    .slice(0, 3);

  if (relatedBooks.length === 0) return null;

  return (
    <section className="py-24 px-8 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block font-inter text-xs tracking-[0.2em] text-gray-500 uppercase">
            Discover
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 mb-6 tracking-tight">
            You may also like
          </h2>
          <div className="w-16 h-[1px] bg-gray-300 mx-auto mt-6 mb-8"></div>
          <p className="font-inter text-lg text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            Explore more publications from Dr. Antwi-Boasiako
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {relatedBooks.map((book) => (
            <Link
              href={`/publications/${book.id}`}
              key={book.id}
              className="group cursor-pointer flex flex-col items-center"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[3/4] mb-8 group-hover:-translate-y-2 transition-transform duration-500">
                <div className="absolute inset-4 bg-gray-200 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                <Image
                  src={book.coverImage}
                  alt={book.title}
                  fill
                  className="object-cover relative z-10 border border-gray-100/50"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  onError={(e) => {
                    console.error('Image failed to load:', book.coverImage);
                  }}
                />
              </div>

              {/* Content */}
              <div className="text-center space-y-4 px-2">
                <div>
                  <span className="font-inter text-xs tracking-[0.2em] text-amber-700 uppercase">
                    {book.author}
                  </span>
                </div>

                <h3 className="font-playfair text-2xl text-gray-900 group-hover:text-amber-800 transition-colors duration-300">
                  {book.title}
                </h3>

                <div className="flex items-center justify-center space-x-6 pt-2">
                  <span className="font-inter text-lg text-gray-900">
                    <span className="text-sm text-gray-500 mr-1">$</span>
                    {book.internationalPrice}
                  </span>
                  <span className="font-inter text-lg text-gray-900">
                    <span className="text-sm text-gray-500 mr-1 uppercase text-[10px] tracking-wider">GH</span>
                    {book.ghanaPrice}
                  </span>
                </div>

                {/* View Details Link (Animated Underline) */}
                <div className="pt-4 overflow-hidden inline-block relative">
                  <span className="font-inter text-xs tracking-[0.2em] uppercase text-gray-900">
                    View Details
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-amber-800 transform -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
