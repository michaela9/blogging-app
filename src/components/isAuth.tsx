import React, { Component } from "react";

export default function isAuth({ ...props }) {
  const { isLoggedIn } = useContext(AuthContext);

  return <Component {...props!} />;
}
