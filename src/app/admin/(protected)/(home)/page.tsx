import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin - Homepage",
};

export default function ProtectedPage() {
  return (
    <div>
      <h1>Protected Page</h1>
    </div>
  );
}
