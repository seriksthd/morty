import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosMorti } from "../../api/axiosMorti";

export const getAllTour = createAsyncThunk(
  "tours/getAllTour",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosMorti.get("/character");
      console.log("data.results: ", data.results);
      return data.results;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);



export const getTourById = createAsyncThunk(
  "tours/getTourById",
  async (Id, { rejectWithValue }) => {
    console.log("Fetching tour with ID:", Id);

    try {
      const { data } = await axiosMorti.get(`/character/${Id}`);
      console.log("Received data:", data);
      return data;
    } catch (error) {
      console.error("Error fetching tour:", error);
      return rejectWithValue(error.response?.data?.message || "Ошибка запроса");
    }
  }
);
