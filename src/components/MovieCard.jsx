import { BookmarkPlusIcon, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addMovieToWatchList, removeMovieFromWatchList } from "../features/watchListSlice";

const MovieCard = ({movieObj}) => {

  const watchList = useSelector((state)=>state.moviesWatchList.watchList)
  const dispatch = useDispatch()

  const doesContain = (movieObj)=>{
    for(let i=0; i<watchList.length; i++){
      if(watchList[i].id == movieObj.id){
        return true
      }
    }
    return false

  }
  return (
    <div
      className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80 xl:h-[50vh] rounded-xl md:hover:scale-110 overflow-hidden hover:cursor-pointer duration-200 bg-cover bg-center"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${movieObj.poster_path})`,
      }}
    >
      {doesContain(movieObj) ? <div onClick = {()=>{dispatch(removeMovieFromWatchList(movieObj))}} className="bg-gray-600/50 w-fit rounded-sm absolute text-red-400 right-0 p-2"><Trash2/></div> : <div onClick = {()=>{dispatch(addMovieToWatchList(movieObj))}} className="bg-gray-600/50 w-fit text-yellow-100  rounded-sm absolute right-0 p-2"><BookmarkPlusIcon/></div>}
      <div className="absolute text-white text-center w-full p-2 bg-gray-900/60 bottom-0 left-0 text-sm sm:text-base truncate">{movieObj.original_title}</div>
    </div>
  );
};

export default MovieCard;
