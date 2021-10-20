import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
const User = {
  results: [
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Gus",
        last: "Van Erven",
      },
      location: {
        street: {
          number: 8614,
          name: "Karspelweg",
        },
        city: "Midlum",
        state: "Utrecht",
        country: "Netherlands",
        postcode: 57158,
        coordinates: {
          latitude: "46.0593",
          longitude: "-158.2743",
        },
        timezone: {
          offset: "-6:00",
          description: "Central Time (US & Canada), Mexico City",
        },
      },
      email: "gus.vanerven@example.com",
      login: {
        uuid: "5d3de8c8-b0cd-4000-ad58-d7648c3b6176",
        username: "greenleopard863",
        password: "store",
        salt: "SaW2ddc5",
        md5: "0a1e5d663484a466d06c26a7f3955e9e",
        sha1: "6ad62e92f15b5be7c726acb236d2ade75fecca32",
        sha256:
          "3df2d2ca7aec71423f6837577ec2a48414e48530b6d988988a23c540b6f0ac61",
      },
      dob: {
        date: "1968-08-25T18:18:40.352Z",
        age: 53,
      },
      registered: {
        date: "2009-08-26T11:59:38.448Z",
        age: 12,
      },
      phone: "(571)-730-4313",
      cell: "(381)-222-4283",
      id: {
        name: "BSN",
        value: "16953596",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/28.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/28.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/28.jpg",
      },
      nat: "NL",
    },
  ],
  info: {
    seed: "7fda31b57fd990c7",
    results: 1,
    page: 1,
    version: "1.3",
  },
};

type UserType = typeof User;
export const user = createAsyncThunk("users/user", async () => {
  const responce = (await (
    await axios.get("https://randomuser.me/api/")
  ).data) as UserType;
  let user = responce.results[0];
  return {
    photo: user.picture.large,
    firstName: user.name.first,
    lastName: user.name.last,
  };
});
