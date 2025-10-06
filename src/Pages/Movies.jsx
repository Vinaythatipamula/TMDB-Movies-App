import React, { useEffect } from "react";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import { fetchMovies } from "../features/moviesSlice";
import { useDispatch, useSelector } from "react-redux";


const Movies = () => {
    const { movies, loading, error }= useSelector((state)=>state.allMovies)
    const pageNo = useSelector((state)=>state.page.pageNo)
    const dispatch = useDispatch()
    

    useEffect(()=>{
        dispatch(fetchMovies(pageNo))
    },[dispatch, pageNo])

    if(loading) return <h2 className="text-center my-10 font-bold">Loading...</h2>
    if(error) return <h2 className="text-center my-10 font-bold">Error: {error}</h2>

  return (
    <div>
      <h1 className="font-bold text-center text-xl sm:text-2xl md:text-3xl mt-2">Trending Movies</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 md:gap-8 my-5 mx-5">
        {movies.map((movieObj)=>{
          return <MovieCard key={movieObj.id} movieObj={movieObj}/>
        })}
        
      </div>
      <div>
        <Pagination />
      </div>
    </div>
  );
};

export default Movies;
