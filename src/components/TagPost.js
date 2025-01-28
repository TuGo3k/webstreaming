export default function TagPost() {
  const tags = ["Movies", "Creative", "News", "Romantic", "Who", "English", "Blending"];

  return (
    <div className="bg-gray-900 text-white p-4 md:p-6 rounded-xl max-w-full md:max-w-sm">
      <h2 className="text-lg md:text-xl font-semibold mb-4">
        Tag Post
        <div className="w-8 md:w-10 border-b-4 border-yellow-400 mb-4"></div>
      </h2>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-700 text-gray-300 px-3 py-2 rounded-md text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
