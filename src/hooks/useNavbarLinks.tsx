import { useTranslations } from "next-intl";

export default function useNavbarLinks() {
  const t = useTranslations("Navbar");

  const baseLinks = [
    {
      id: 1,
      label: t("recentArticles"),
      href: "/",
    },
    {
      id: 2,
      label: t("about"),
      href: "/about",
    },
  ];

  const loggedInLinks = [
    {
      id: 3,
      label: t("myArticles"),
      href: "/my-articles",
    },
    {
      id: 4,
      label: t("createArticle"),
      href: "/create-article",
    },
  ];

  return { baseLinks, loggedInLinks };
}
