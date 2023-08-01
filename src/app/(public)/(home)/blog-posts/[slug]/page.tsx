import type { Metadata } from "next";

import ArticleDetail from "@/containers/ArticleDetail";

export const metadata: Metadata = {
  title: "Homepage",
};

const article = {
  id: "2",
  image: "/img.png",
  heading: "Why Do Cats Eat Lasagnas?",
  author: "Paul Randalph",
  date: "02/13/17",
  description:
    "A cat's whiskers — or vibrissae — are a well-honed sensory tool that helps a cat see in the dark and steer clear of hungry predators. Whiskers are highly sensitive tactile hairs that grow in patterns on a cat's muzzle, above its eyes and elsewhere on its body, like the ears, jaw and forelegs",
  link: "/",
  numberOfComments: 5,
};

type Props = {
  params: {
    id: string;
  };
};

const Page = ({ params: { id } }: Props) => {
  return <ArticleDetail id={id} article={article} />;
};

export default Page;
