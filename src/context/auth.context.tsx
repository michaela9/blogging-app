"use client";

import type { ReactNode } from "react";

import React, { createContext, useEffect, useState } from "react";

type AuthContextType = {
  token: string | null;
  login: (token: string) => void;
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

const defaultApiKey =
  process.env.NEXT_PUBLIC_API_KEY || "fallback_api_key_here";

// const defaultApiKey = "b21611a3-d995-499c-80d5-4e0f72db5ae1";

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("token") as string | null;
    }
    return null;
  });

  const [apiKey, setApiKey] = useState<string | null>(defaultApiKey);

  const login = (newToken: string) => {
    setToken(newToken);
  };

  const signup = (newApiKey: string) => {
    setApiKey(newApiKey);
  };

  const logout = () => {
    setToken(null);
  };

  const isLoggedIn = !!token;

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (token) {
        localStorage.setItem("token", token);
      } else {
        localStorage.removeItem("token");
      }
    }
  }, [token]);

  return (
    <AuthContext.Provider
      value={{ token, login, logout, isLoggedIn, signup, apiKey }}
    >
      {children}
    </AuthContext.Provider>
  );
};
