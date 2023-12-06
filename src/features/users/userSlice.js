import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const themes = {
  emerald: "emerald",
  night: "night",
};
const getUserFromLocalStorage = () => {
  const user = JSON.parse(localStorage.getItem("user")) || null;
  return user;
};
const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("theme") || themes.emerald;
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};

const initialState = {
  user: getUserFromLocalStorage(),
  theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, { payload }) => {
      const user = { ...payload.user, token: payload.jwt };
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
      toast.success("Logged out successfully");
    },
    toggleTheme: (state) => {
      const { emerald, night } = themes;
      state.theme = state.theme === emerald ? night : emerald;
      //   setTheme(newTheme);
      document.documentElement.setAttribute("data-theme", state.theme);
      localStorage.setItem("theme", state.theme);
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
