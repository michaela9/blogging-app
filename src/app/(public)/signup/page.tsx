import type { Metadata } from "next";

import Signup from "@/containers/forms/Signup";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function Page() {
  return <Signup />;
}
