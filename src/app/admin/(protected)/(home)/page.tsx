import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin - Homepage",
};

export default function Page() {
  return (
    <div>
      <h1 className="text-center text-4xl text-nb-blue">Admin</h1>
    </div>
  );
}
