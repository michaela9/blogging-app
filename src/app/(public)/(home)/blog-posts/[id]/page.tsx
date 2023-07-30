import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Homepage",
};

type Props = {
  params: {
    id: string;
  };
};

export default function Page({ params: { id } }: Props) {
  return (
    <div>
      <h1 className="text-center text-4xl text-nb-blue">Blog post {id}</h1>
    </div>
  );
}
