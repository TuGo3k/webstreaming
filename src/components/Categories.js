export default function Categories() {
  const categories = [
    { name: "Movies", count: 12 },
    { name: "Action Movies", count: 10 },
    { name: "Streaming", count: 9 },
    { name: "Download", count: 16 },
  ];

  return (
    <div className="bg-gray-900 text-white p-4 md:p-6 rounded-xl max-w-full md:max-w-sm">
      <h2 className="text-lg md:text-xl font-semibold mb-2">
        Categories
        <div className="w-8 md:w-10 border-b-4 border-yellow-400 mb-4"></div>
      </h2>
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            className="flex justify-between py-2 border-b border-gray-700 last:border-b-0"
          >
            <span>{category.name}</span>
            <span className="text-gray-400">{category.count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
