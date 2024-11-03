import { configureStore } from "@reduxjs/toolkit";
import githubReducer from "./slices/githubSlice";
import themeReducer from "./slices/themeSlice";

export const store = configureStore({
  reducer: {
    github: githubReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
