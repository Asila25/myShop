import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mainApi = createApi({
  reducerPath: "mainApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://keldibekov.online",
  }),
  endpoints: () => ({}),
  tagTypes:["AUTH"]
});

export const {  } = mainApi;
