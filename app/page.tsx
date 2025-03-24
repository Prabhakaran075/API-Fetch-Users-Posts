export default function Home() {
  return (
    <div className="p-8 text-center">
    <h1 className="text-3xl font-bold text-gray-900">Welcome to Our Blog</h1>
    <p className="mt-4 text-lg text-gray-700">
      Explore a variety of posts on different topics.
    </p>

    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="p-6 bg-white shadow-xl rounded-lg">
        <h2 className="text-xl font-semibold">Latest Posts</h2>
        <p className="text-gray-600 mt-2">
          Stay updated with our latest blog posts covering various topics.
        </p>
      </div>
      <div className="p-6 bg-white shadow-xl rounded-lg">
        <h2 className="text-xl font-semibold">Categories</h2>
        <p className="text-gray-600 mt-2">
          Browse posts by categories that interest you.
        </p>
      </div>
      <div className="p-6 bg-white shadow-xl rounded-lg">
        <h2 className="text-xl font-semibold">Popular Articles</h2>
        <p className="text-gray-600 mt-2">
          Check out the most popular articles loved by our readers.
        </p>
      </div>
    </div>
  </div>
  );
}
