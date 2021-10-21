import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from ".";

type RandomUserResponse = {
  results: {
    picture: {
      large: string;
    };
    name: {
      first: string;
      last: string;
    };
  }[];
};

export const fetchUser = createAsyncThunk<User>("user/fetchUser", async () => {
  const response = (
    await axios.get<RandomUserResponse>("https://randomuser.me/api/")
  ).data;
  let user = response.results[0];
  return {
    photo: user.picture.large,
    firstName: user.name.first,
    lastName: user.name.last,
  };
});
