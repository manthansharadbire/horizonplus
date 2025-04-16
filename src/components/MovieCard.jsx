function MovieCard({ Title, Year, Poster, onClick, imdbID, }) {
  return (
    <div className="flex ">
      <div className="p-5 bg-red-600 m-4 w-fit rounded-lg block cursor-pointer hover:bg-gray-500
      transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl" onClick={onClick}>
      <img src={Poster} alt={Title} className="h-[300px] rounded-lg"/>
      <h1 className="text-white font-bold">{Title}</h1>
      <h2 className="text-white">{Year}</h2>
      <h1 >{imdbID}</h1>
    </div>
    </div>
  );
}
export default MovieCard;