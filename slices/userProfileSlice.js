import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "@/lib/supabaseClient";

const initialState = {};

export const fetchUserProfile = createAsyncThunk(
  "getUserProfile",
  async (userId) => {
    const { data } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single();
    return data;
  }
);

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectUserProfile = (state) => state.userProfile;
export default userProfileSlice.reducer;
