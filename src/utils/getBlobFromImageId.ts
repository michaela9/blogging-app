import axios from "axios";

import { imagesEndpoint } from "@/config/router";

export default async function getBlobFromImageId(
  imageId: string,
  apiKey: string | null,
  token: string | null,
) {
  try {
    const response = await axios.get(`${imagesEndpoint}/${imageId}`, {
      method: "GET",
      headers: {
        "X-API-KEY": apiKey,
        Authorization: token,
      },
    });

    const blob = new Blob([response.data], {
      type: response.headers["content-type"] as string,
    });

    const blobURL = URL.createObjectURL(blob);

    return blobURL;
  } catch (error) {
    return null;
  }
}
