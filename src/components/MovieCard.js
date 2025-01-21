export default MovieCard = ({ movie }) => {
    return (
      <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-64 object-cover rounded-lg"
        />
        <div className="mt-4">
          <h3 className="text-xl font-bold">{movie.title}</h3>
          <p className="text-sm text-gray-400">{movie.genre}</p>
          <div className="flex items-center gap-2 mt-2">
            {movie.hd && (
              <span className="bg-white text-black px-2 py-1 rounded text-xs font-bold">
                HD
              </span>
            )}
            <span className="bg-white text-black px-2 py-1 rounded text-xs font-bold">
              {movie.language}
            </span>
            <span className="flex items-center gap-1 text-sm">
              <i className="fas fa-thumbs-up text-yellow-400"></i>
              {movie.rating}
            </span>
          </div>
        </div>
      </div>
    );
  };

