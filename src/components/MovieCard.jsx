function MovieCard({ Title, Year, Poster, onClick, }) {
  return (
    <div >
      <div className="p-5 bg-gray-300 m-4 w-fit rounded-lg cursor-pointer hover:bg-gray-500
      transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl shadow-lg" onClick={onClick}>
      <img src={Poster} alt="Movie Poster" className="h-[300px] w-[220px] rounded-lg object-cover"/>
      <h1 className="text-white font-bold">{Title}</h1>
      <h2 className="text-white">{Year}</h2>
    </div>
    </div>
  );
}
export default MovieCard;