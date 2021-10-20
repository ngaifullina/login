import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { user } from "./userApi";
export type User = {
  firstName: string;
  lastName: string;
  photo: string;
};

export type State = {
  user: User;
};

const initialState: State = {
  user: {
    photo: "",
    firstName: "",
    lastName: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(user.fulfilled, (state, { payload }) => {
      state.user = payload;
    });
  },
});
// export const { getUser} =
//   cardsSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
