import { useIntl } from "react-intl";

import { imagesUrl } from "@/config/router";

import { useGet } from "./api";

export default function useGetBlobFromImageId(imageId: string) {
  const intl = useIntl();
  const { response, data, loading, error } = useGet<Blob>(
    `${imagesUrl}/${imageId}`,
    { responseType: "blob" },
  );

  let blobURL;

  if (error || !data || !response) {
    return {
      message: intl.formatMessage({
        id: "containers.articleItem.blobNotFound",
        defaultMessage: "Blob not found",
      }),
    };
  }

  const blob = new Blob([response.data], {
    type: response.headers["content-type"] as string,
  });

  blobURL = URL.createObjectURL(blob);

  return { blobURL, loading, error, data };
}
