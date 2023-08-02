export type Article = {
  articleId: string;
  image: string;
  title: string;
  author: string;
  createdAt: string;
  perex?: string;
  content: string;
  link: string;
  numberOfComments: number;
};

export const articles: Article[] = [
  {
    articleId: "1",
    image: "/img.png",
    title: "Why Do Cats Have Whiskers?",
    author: "Elisabeth Strain",
    perex: "A cat's whiskers — or vibrissae — are a well-hon",
    createdAt: "02/13/17",
    content:
      "A cat's whiskers — or vibrissae — are a well-honed sensory tool that helps a cat see in the dark and steer clear of hungry predators. Whiskers are highly sensitive tactile hairs that grow in patterns on a cat's muzzle, above its eyes and elsewhere on its body, like the ears, jaw and forelegs",
    link: "/",
    numberOfComments: 0,
  },
  {
    articleId: "2",
    image: "/img.png",
    title: "Why Do Cats Eat Lasagnas?",
    author: "Paul Randalph",
    perex: "A cat's whiskers — or vibrissae — are a well-hon",
    createdAt: "02/13/17",
    content:
      "A cat's whiskers — or vibrissae — are a well-honed sensory tool that helps a cat see in the dark and steer clear of hungry predators. Whiskers are highly sensitive tactile hairs that grow in patterns on a cat's muzzle, above its eyes and elsewhere on its body, like the ears, jaw and forelegs",
    link: "/",
    numberOfComments: 5,
  },
];
