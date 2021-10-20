import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  photo: string;
};

export type State = {
  users: User[];
};

const initialState: State = {
  users: [],
};

export const cardsSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},

  //   extraReducers: (builder) => {
  //     builder.addCase(getCards.fulfilled, (state, { payload }) => {
  //       state.products.push(...payload);
  //     });
  //   },
});
// export const { likeToggle, deleteCard, toggleShowLikedCards } =
//   cardsSlice.actions;

// export const selectCards = (state: RootState) => state.cards.products;
// export const selectShowLiked = (state: RootState) => state.cards.showLiked;

export default cardsSlice.reducer;
