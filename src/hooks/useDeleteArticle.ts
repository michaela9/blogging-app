import type { AxiosError, AxiosResponse } from "axios";

import axios from "axios";
import { useContext, useEffect, useState } from "react";

import { AuthContext } from "@/provider/AuthProvider";

export default function useDelete<D>(url: string) {
  const [response, setResponse] = useState<AxiosResponse<D> | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>();
  const { token, apiKey } = useContext(AuthContext);

  const [refetchIndex, setRefetchIndex] = useState(0);

  useEffect(() => {
    void fetchDelete();
  }, [url, refetchIndex]);

  const fetchDelete = async () => {
    setLoading(true);
    try {
      const response = await axios.delete(url, {
        method: "DELETE",
        headers: {
          "X-API-KEY": apiKey,
          Authorization: token,
        },
      });

      if (response) {
        setResponse(response);
      }
    } catch (error) {
      setError(error as AxiosError);
    }
    setLoading(false);
  };

  //   const deleteArticle = async (artId: string) => {
  //     axios
  //       .delete(`${articlesUrl}/${artId}`, {
  //         headers: {
  //           "X-API-KEY": apiKey,
  //           Authorization: token,
  //         },
  //       })
  //       .then((response) => {
  //         refetch();
  //       })
  //       .catch((error) => {
  //         setError(error as AxiosError);
  //       });
  //   };

  const refetch = () => {
    setRefetchIndex((prev) => prev + 1);
  };

  return { response, loading, error, refetch };
}
