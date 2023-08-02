import type { Metadata } from "next";

import Login from "@/containers/forms/Login";

export const metadata: Metadata = {
  title: "Login",
};

const Page = () => {
  return <Login />;
};
export default Page;
