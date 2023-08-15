import { useIntl } from "react-intl";

import { AppUrl } from "@/config/router";

export default function useNavbarLinks() {
  const intl = useIntl();

  const baseLinks = [
    {
      id: 1,
      label: intl.formatMessage({
        id: "containers.navbar.recentArticles",
        defaultMessage: "Recent Articles",
      }),
      href: "/",
    },
    {
      id: 2,
      label: intl.formatMessage({
        id: "containers.navbar.about",
        defaultMessage: "About",
      }),
      href: "/about",
    },
  ];

  const loggedInLinks = [
    {
      id: 3,
      label: intl.formatMessage({
        id: "containers.navbar.myArticles",
        defaultMessage: "My Articles",
      }),
      href: "/my-articles",
    },
    {
      id: 4,
      label: intl.formatMessage({
        id: "containers.navbar.createArticle",
        defaultMessage: "Create Article",
      }),
      href: "/create-article",
    },
  ];

  return { baseLinks, loggedInLinks };
}
