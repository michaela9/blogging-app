import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin - Homepage",
};

const ProtectedPage = () => {
  return (
    <div>
      <h1>Protected Page</h1>
    </div>
  );
};

export default ProtectedPage;
