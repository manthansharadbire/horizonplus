function MovieCard({ Title, Poster, onClick }) {
  return (
    <div
      className="flex flex-col items-center bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transform hover:scale-[1.03] transition-all duration-300 w-full max-w-[160px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-[220px] xl:max-w-[240px] cursor-pointer"
      onClick={onClick}
    >
      <div className="w-full aspect-[2/3] bg-gray-200 dark:bg-gray-700">
        <img
          src={Poster}
          alt={`${Title} Poster`}
          className="w-full h-full object-cover"
        />
      </div>

     
      
      </div>
  
  );
}

export default MovieCard;
