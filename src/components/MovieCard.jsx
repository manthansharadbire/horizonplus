function MovieCard({  Poster, onClick }) {
  return (
    <div
      className="flex flex-col items-center rounded-lg overflow-hidden shadow-md hover:shadow-xl transform hover:scale-[1.03] transition-all duration-300 w-full max-w-[160px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-[220px] xl:max-w-[240px] cursor-pointer"
      onClick={onClick}
    >
      <div className="w-full ">
        <img
          src={Poster}
          alt={` Poster`}
          className="w-full h-[220px] md:h-[300px] object-cover"
        />
      </div>

     
      
      </div>
  
  );
}

export default MovieCard;
