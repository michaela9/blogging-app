import { useIntl } from "react-intl";

import { imagesEndpoint } from "@/config/router";

import { useGet } from "./api";

export default function useGetBlobFromImageId(imageId: string) {
  const intl = useIntl();

  const {
    response,
    data,
    loading,
    error: fetchError,
  } = useGet<Blob>(`${imagesEndpoint}/${imageId}`, { responseType: "blob" });

  let blobURL;
  let message;

  if (fetchError || !data || !response) {
    message = intl.formatMessage({
      id: "hooks.useGetBlobFromImageId.blobNotFound",
      defaultMessage: "Blob not found",
    });
  } else {
    const blob = new Blob([response.data], {
      type: response.headers["content-type"] as string,
    });
    blobURL = URL.createObjectURL(blob);
  }

  return { blobURL: blobURL || "", loading, error: fetchError, data, message };
}
