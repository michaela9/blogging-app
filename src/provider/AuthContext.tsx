import { createContext, useState, useContext } from "react";

export type AuthContextValue = {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
};

export const AuthContext = createContext<AuthContextValue | null>(null);
