import { useIntl } from "react-intl";

import { AdminUrl, AppUrl } from "@/config/router";

export default function useNavbarLinks() {
  const intl = useIntl();

  const baseLinks = [
    {
      id: 1,
      label: intl.formatMessage({
        id: "containers.navbar.myArticles",
        defaultMessage: "My Articles",
      }),
      href: AppUrl.home,
    },
    {
      id: 2,
      label: intl.formatMessage({
        id: "containers.navbar.about",
        defaultMessage: "About",
      }),
      href: AppUrl.about,
    },
  ];

  const loggedInLinks = [
    {
      id: 3,
      label: intl.formatMessage({
        id: "containers.navbar.myArticles",
        defaultMessage: "My Articles",
      }),
      href: AdminUrl.home,
    },
    {
      id: 4,
      label: intl.formatMessage({
        id: "containers.navbar.createArticle",
        defaultMessage: "Create Article",
      }),
      href: AdminUrl.createArticle,
    },
  ];

  return { baseLinks, loggedInLinks };
}
