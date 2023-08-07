"use client";

import { useEffect, useState } from "react";

const useIsLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    setIsLoggedIn(!!accessToken);
  }, []);

  // const checkLoginStatus = () => {
  //   const accessToken = localStorage.getItem("accessToken");
  //   const condition = accessToken && accessToken !== "";
  //   setIsLoggedIn(condition);
  // };

  // const logout = () => {
  //   localStorage.removeItem("accessToken");
  // };

  // useEffect(() => {
  //   checkLoginStatus();
  // }, []);

  return { isLoggedIn, setIsLoggedIn };
};

export default useIsLoggedIn;
