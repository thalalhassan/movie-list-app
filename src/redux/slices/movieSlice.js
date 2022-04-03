import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieList: [],
  movieSearchList: [],
  pageData: {},
  isSearch: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setMoviesPage: (state, action) => {
      const {
        "content-items": { content },
        ...pageData
      } = action.payload.page;
      state.movieList = content;
      state.pageData = pageData;
    },
    updateMoviesPage: (state, action) => {
      const {
        "content-items": { content },
        ...pageData
      } = action.payload.page;
      state.movieList = [...state.movieList, ...content];
      state.pageData = pageData;
    },
    searchMovies: (state, action) => {
      const searchValue = action.payload;
     
      if (!searchValue) {
        state.isSearch = false;
        state.movieSearchList = [];
        return;
      }

      const result = state.movieList.filter(({ name }) =>
        name.toLowerCase().includes(searchValue.toLowerCase())
      );

      state.isSearch = true;
      state.movieSearchList = result;
    },
  },
});

// Action creators are generated for each case reducer function
export const { searchMovies, setMoviesPage, updateMoviesPage } = counterSlice.actions;

export default counterSlice.reducer;
