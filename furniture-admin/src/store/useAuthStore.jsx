import { create } from "zustand";
import Cookies from "universal-cookie";
import { decryptedData, encryptData } from "../utils/crypto";
const cookies = new Cookies();

const authStore = (set) => ({
  loggedIn: decryptedData(localStorage.getItem("user"))?.token ? true : false,
  user: decryptedData(localStorage.getItem("user")) || null,

  setUser: (user) => {
    set(() => {
      localStorage.setItem("user", encryptData(user));
      return { user: user };
    });
  },

  logout: () =>
    set(() => {
      cookies.remove("user");
      return {
        loggedIn: false,
        user: null,
      };
    }),
});

export const useAuthStore = create(authStore);