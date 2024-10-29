import { configureStore } from "@reduxjs/toolkit";
import LayoutSlice from "../redux/LayoutSlice";
import HomePageSlice from "../redux/HomePageSlice"

export const store = configureStore({
  reducer: {
    layout: LayoutSlice,
    home: HomePageSlice,

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
