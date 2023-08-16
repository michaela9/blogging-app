"use client";

import type { ReactNode } from "react";

import { useRouter } from "next/navigation";
import React, { createContext, useEffect, useState } from "react";

import { AppUrl } from "@/config/router";

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
  const [token, setToken] = useState<string | null>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("token") as string | null;
    }
    return null;
  });

  const [tokenExpirationTime, setTokenExpirationTime] = useState<number | null>(
    null,
  );

  const [apiKey, setApiKey] = useState<string | null>(defaultApiKey);

  const login = (newToken: string, expirationTime: number) => {
    setToken(newToken);
    setTokenExpirationTime(expirationTime);
  };

  const signup = (newApiKey: string) => {
    setApiKey(newApiKey);
  };

  const logout = () => {
    setToken(null);
    setTokenExpirationTime(null);
    router.push(AppUrl.home);
  };

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);

      const expirationDate = new Date(
        new Date().getTime() + (tokenExpirationTime || 0),
      );
      localStorage.setItem("tokenExpiration", expirationDate.toISOString());

      const remainingTime = tokenExpirationTime! * 1000;
      const logoutTimer = setTimeout(logout, remainingTime);
      return () => clearTimeout(logoutTimer);
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("tokenExpiration");
    }
  }, [token, tokenExpirationTime]);

  const isLoggedIn = !!token;

  return (
    <AuthContext.Provider
      value={{ token, login, logout, isLoggedIn, signup, apiKey }}
    >
      {children}
    </AuthContext.Provider>
  );
};
