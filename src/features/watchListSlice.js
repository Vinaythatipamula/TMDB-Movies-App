import { createSlice } from "@reduxjs/toolkit";

const savedWatchList = JSON.parse(localStorage.getItem("moviesApp")) || [];

const initialState = {watchList: savedWatchList}

const watchListSlice = createSlice({
    name: 'moviesWatchList',
    initialState,
    reducers : {
        addMovieToWatchList: (state, action)=>{
            let newWatchList = [...state.watchList, action.payload];
            localStorage.setItem("moviesApp", JSON.stringify(newWatchList));
            state.watchList = newWatchList;
            
        },
        removeMovieFromWatchList: (state, action) => {
            let filteredWatchList = state.watchList.filter((movie) => {
            return movie.id != action.payload.id;
            });
            state.watchList = filteredWatchList
            localStorage.setItem("moviesApp", JSON.stringify(filteredWatchList));
        },

        sortWatchList: (state, action)=>{
            if(action.payload==='asc'){
                state.watchList = [...state.watchList].sort(
                (a,b)=> a.vote_average - b.vote_average)
            } 
            else{
                state.watchList = [...state.watchList].sort(
                    (a,b)=>b.vote_average-a.vote_average
                )
            }

        }
    }


})

export const {addMovieToWatchList, removeMovieFromWatchList, sortWatchList} = watchListSlice.actions
export default watchListSlice.reducer