import Image from 'next/image';
import Link from 'next/link';

export default function YouMayAlsoLike({ currentBookId, books }) {
  // Filter out the current book and get 3 related books
  const relatedBooks = books
    .filter(book => book.id !== currentBookId)
    .slice(0, 3);

  if (relatedBooks.length === 0) return null;

  return (
    <section className="py-16 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-merriweather text-3xl font-bold text-gray-900 mb-4">
            You may also like
          </h2>
          <p className="font-inter text-lg text-gray-600">
            Discover more publications from Dr. Antwi-Boasiako
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedBooks.map((book) => (
            <Link 
              href={`/publications/${book.id}`} 
              key={book.id} 
              className="group cursor-pointer bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative mb-4 overflow-hidden">
                <div className="relative w-full aspect-[3/4] bg-gray-100">
                  {book.coverImage && book.coverImage.trim() !== '' && (
                    <Image 
                      src={book.coverImage} 
                      alt={book.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      onError={(e) => {
                        console.error('Image failed to load:', book.coverImage);
                      }}
                    />
                  )}
                </div>
              </div>
              <div className="p-6 text-left">
                <div className="mb-2">
                  <span className="font-inter text-xs tracking-widest text-gray-500 uppercase">
                    {book.author}
                  </span>
                </div>
                <h3 className="font-merriweather text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  {book.title}
                </h3>
                <p className="font-inter text-sm text-gray-600 mb-4 line-clamp-3">
                  {book.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-inter text-lg font-medium text-gray-900">
                    ${book.internationalPrice}
                  </span>
                  <span className="font-inter text-sm text-blue-600 group-hover:text-blue-700 transition-colors duration-200">
                    View Details →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
