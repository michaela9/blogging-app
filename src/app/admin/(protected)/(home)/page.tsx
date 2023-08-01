import type { Metadata } from "next";

import useIsLoggedIn from "@/hooks/useIsLoggedIn";

export const metadata: Metadata = {
  title: "Admin - Homepage",
};

const ProtectedPage = () => {
  const isLoggedIn = useIsLoggedIn();

  if (!isLoggedIn) {
    return <h1>add redirect</h1>;
  }
  return (
    <div>
      <h1>Protected Page</h1>
    </div>
  );
};

export default ProtectedPage;
