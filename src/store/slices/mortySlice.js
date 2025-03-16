import { createSlice } from "@reduxjs/toolkit";
import { getAllMorty, getMortyById } from "../thunks/mortyThunk";

const mortySlice = createSlice({
  name: "morty",
  initialState: {
    morty: [],
    error: "",
    loading: false,
    mortyById: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllMorty.fulfilled, (state, action) => {
        state.loading = false;
        state.morty = action.payload;
      })
      .addCase(getAllMorty.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllMorty.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getMortyById.fulfilled, (state, action) => {
        state.mortyById = [action.payload];
      });
  },
});

export const {} = mortySlice.actions;

export const mortyReducer = mortySlice.reducer;
