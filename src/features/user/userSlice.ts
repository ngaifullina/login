import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchUser } from "./userApi";

export type User = {
  firstName: string;
  lastName: string;
  photo: string;
};

export type State = {
  user: User;
  status: {
    isFetching: boolean;
    isSuccess: boolean;
    isError: boolean;
  };
};

const initialState: State = {
  user: {
    photo: "",
    firstName: "",
    lastName: "",
  },
  status: {
    isFetching: false,
    isSuccess: false,
    isError: false,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearState: (state) => {
      state.status.isError = false;
      state.status.isSuccess = false;
      state.status.isFetching = false;
      return state;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, { payload }) => {
        state.status.isFetching = false;
        state.status.isSuccess = true;
        state.user = payload;
      })
      .addCase(fetchUser.pending, (state) => {
        state.status.isFetching = true;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.status.isFetching = false;
        state.status.isError = true;
      });
  },
});

export const selectUser = (state: RootState) => state.user.user;
export const status = (state: RootState) => state.user.status;

export const { clearState } = userSlice.actions;

export default userSlice.reducer;
