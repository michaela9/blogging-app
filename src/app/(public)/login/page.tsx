import type { Metadata } from "next";

import Login from "@/containers/Login";

export const metadata: Metadata = {
  title: "Login",
};

const Page = () => {
  return <Login />;
};
export default Page;
