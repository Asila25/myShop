import { configureStore } from "@reduxjs/toolkit";
import { mainApi } from "./api";


export const store = configureStore({
    reducer: {
        [mainApi.reducerPath]:mainApi.reducer
    },
    middleware: (getDefaultMiddlewere) =>
        getDefaultMiddlewere().concat(mainApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch