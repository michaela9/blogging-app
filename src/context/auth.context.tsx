"use client";

import type { ReactNode } from "react";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { createContext, useEffect, useState } from "react";

import { AppUrl } from "@/config/router";

type AuthContextType = {
  token: string | (() => string | null) | null;
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

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const router = useRouter();

  const [apiKey, setApiKey] = useState<string | null>(
    `${process.env.NEXT_PUBLIC_API_KEY}`,
  );
  const [token, setToken] = useState<string | null>(
    Cookies.get("token") || null,
  );
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!token);

  useEffect(() => {
    if (token) {
      const expirationTime = Cookies.get("expirationTime");
      if (expirationTime) {
        const remainingTime = Number(expirationTime) - new Date().getTime();
        const timerId = setTimeout(() => {
          logout();
        }, remainingTime);

        return () => clearTimeout(timerId);
      }
    }
  }, [token]);

  const login = (newToken: string, expirationTime: number) => {
    const expiresAt = new Date(
      new Date().getTime() + expirationTime * 1000,
    ).getTime();
    Cookies.set("token", newToken, {
      expires: expiresAt,
    });

    Cookies.set("expirationTime", expiresAt.toString());

    setToken(newToken);
    setIsLoggedIn(true);
  };

  const signup = (newApiKey: string) => {
    setApiKey(newApiKey);
  };

  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("expirationTime");
    setToken("");
    setIsLoggedIn(false);
    router.push(AppUrl.home);
  };

  return (
    <AuthContext.Provider
      value={{ token, login, logout, isLoggedIn, signup, apiKey }}
    >
      {children}
    </AuthContext.Provider>
  );
};
