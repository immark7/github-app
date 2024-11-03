import { createSlice } from "@reduxjs/toolkit";
import { THEME_STORAGE_KEY } from "../../libs/constants";

type Theme = "dark" | "light";

interface ThemeState {
  theme: Theme;
}

const initialState: ThemeState = {
  theme: (localStorage.getItem(THEME_STORAGE_KEY) as Theme) || "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
      localStorage.setItem(THEME_STORAGE_KEY, state.theme);
      document.documentElement.classList.remove("dark", "light");
      document.documentElement.classList.add(state.theme);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
