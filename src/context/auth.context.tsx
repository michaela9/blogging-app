"use client";

import type { ReactNode } from "react";

import { useRouter } from "next/navigation";
import React, { createContext, useEffect, useState } from "react";

import { AppUrl } from "@/config/router";
import Cookies from "js-cookie";

type AuthContextType = {
  token: string | null;
  login: (token: string, expirationTime: number) => void;
  logout: () => void;
  isLoggedIn: boolean;
  apiKey: string | null;
  signup: (apiKey: string) => void;
};

export const AuthContext = createContext<AuthContextType>({
  token: null,
  login: () => {},
  logout: () => {},
  isLoggedIn: false,
  apiKey: null,
  signup: () => {},
});

type AuthProviderProps = {
  children: ReactNode;
};

const defaultApiKey = `${process.env.NEXT_PUBLIC_API_KEY}`;

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const router = useRouter();

  const [apiKey, setApiKey] = useState<string | null>(defaultApiKey);
  const [token, setToken] = useState<string | null>(Cookies.get("token"));

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  // const getToken = () => Cookies.get("token");

  const tokenWillExpire = new Date(new Date().getTime() + 1 * 60 * 1000);

  useEffect(() => {
    setIsLoggedIn(!!token);

    if (token) {
      Cookies.set("token", token, { expires: tokenWillExpire });

      const logoutTimer = setTimeout(() => {
        logout();
        router.refresh();
      }, 3600 * 1000);

      return () => clearTimeout(logoutTimer);
    } else {
      Cookies.remove("token");
    }
  }, [token]);

  const login = (newToken: string, expirationTime: number) => {
    // const expiresAt = new Date(new Date().getTime() + expirationTime * 1000);
    setToken(newToken);
    setIsLoggedIn(true);
  };

  const signup = (newApiKey: string) => {
    setApiKey(newApiKey);
  };

  const logout = () => {
    setToken(null);
    setIsLoggedIn(false);
    Cookies.remove("token");

    router.push(AppUrl.home);
    // router.refresh();
  };

  console.log(isLoggedIn);
  return (
    <AuthContext.Provider
      value={{ token, login, logout, isLoggedIn, signup, apiKey }}
    >
      {children}
    </AuthContext.Provider>
  );
};
