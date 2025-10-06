import { Trash2, MoveDownIcon, MoveUpIcon} from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {removeMovieFromWatchList, sortWatchList } from "../features/watchListSlice";

const WatchList = () => {

  const watchList = useSelector((state)=>state.moviesWatchList.watchList)
  const dispatch = useDispatch()

  const [search, setSearch] = useState('')

  const handleSearch = (e)=>{
      setSearch(e.target.value)
  }

  if(watchList.length==0){return <h2 className="text-center m-10 text-gray-400">WatchList is Empty</h2>}
  return (
    <>
      <div className="flex justify-center items-center px-4">
        <input
          value = {search}
          onChange={handleSearch}
          type="text"
          className="w-full sm:w-1/2 md:w-1/3 p-2 rounded-md bg-gray-200"
          placeholder="Search For Movies"
        />
      </div>
      <div className="m-4 sm:m-6 md:m-8 overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-[640px] w-full text-gray-600 text-xs sm:text-sm md:text-base text-center">
          <thead className="border-b-2">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">
                <div className="flex justify-center items-center gap-2">
                  <div onClick={()=>dispatch(sortWatchList('asc'))} className="cursor-pointer"><MoveDownIcon size={15}/></div>
                  <div>Rating</div>
                  <div onClick={()=>dispatch(sortWatchList('dsc'))} className="cursor-pointer"><MoveUpIcon size={15}/></div>
                </div>
              </th>
              <th className="p-3">Popularity</th>
              <th className="p-3">Genre</th>
            </tr>
          </thead>
          
          {watchList.filter((movieObj)=>{
            return movieObj.original_title.toLowerCase().includes(search.toLocaleLowerCase())
          }).map((movieObj) => {
            return (
              <tbody key = {movieObj.id}>
                <tr className="border-b-2">
                  <td className="p-3">
                    <div className="flex items-center gap-3 sm:gap-5">
                      <img
                          src={`https://image.tmdb.org/t/p/w500${movieObj.poster_path}`}
                          alt="img"
                          className="w-12 sm:w-16 md:w-20 rounded-md "
                        />
                      <div className="text-left">{movieObj.original_title}</div>
                    </div>
                  </td>
                  <td className="p-3">{movieObj.vote_average}</td>
                  <td className="p-3">{movieObj.popularity}</td>
                  <td className="p-3">{movieObj.genre_ids}</td>
                  <td className="p-3"><button className="text-red-400 " onClick = {()=>dispatch(removeMovieFromWatchList(movieObj))} ><Trash2/></button></td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default WatchList;
