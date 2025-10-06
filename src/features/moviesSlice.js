import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (pageNo, thunkAPI) => {
    try {
      const movies = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=7932ad555c2a7be9a06572a0d0fe2c2f&page=${pageNo}`
      );
      return movies.data.results; // this becomes action.payload
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
    movies:[],
    loading: false,
    error: null,
}
const moviesSlice = createSlice({
    name:'allMovies',
    initialState,
    extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
      });
  },
})

export default moviesSlice.reducer