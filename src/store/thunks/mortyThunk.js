import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosMorti } from "../../api/axiosMorti";

export const getAllMorty = createAsyncThunk(
  "morty/getAllMorty",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosMorti.get("/character");
      return data.results;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getMortyById = createAsyncThunk(
  "morty/getMortyById",
  async (Id, { rejectWithValue }) => {
    try {
      const { data } = await axiosMorti.get(`/character/${Id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
