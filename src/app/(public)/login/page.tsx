import type { Metadata } from "next";

import Login from "@/containers/forms/LoginForm";

export const metadata: Metadata = {
  title: "Login",
};

export default function Page() {
  return <Login />;
}
