export default function RecentPosts({ data }) {
  return (
    <div className="bg-gray-900 text-white p-4 md:p-6 rounded-xl max-w-full md:max-w-sm">
      <h2 className="text-lg md:text-xl font-semibold mb-4">
        Recent Posts
        <div className="w-8 md:w-10 border-b-4 border-yellow-400 mb-4"></div>
      </h2>
      <ul>
        {data.map((el, index) => (
          <li key={index} className="flex items-center gap-3 py-3 border-b border-gray-700 last:border-b-0">
            <img src={el.image} alt={el.title} className="w-12 h-12 object-cover rounded-md" />
            <div>
              <p className="font-semibold text-sm">{el.title}</p>
              <p className="text-xs text-gray-400 flex items-center gap-1">
                <span className="text-yellow-500">⏳</span> {el.date}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
