"use client";

import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

import axios from "axios";
import { useContext, useEffect, useState } from "react";

import { AuthContext } from "@/context/auth.context";

export function useGet<D>(url: string, options: AxiosRequestConfig<D> = {}) {
  const [response, setResponse] = useState<AxiosResponse<D> | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>();
  const { token } = useContext(AuthContext);
  const [refetchIndex, setRefetchIndex] = useState(0);

  useEffect(() => {
    void fetchGet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, refetchIndex]);

  const fetchGet = async () => {
    setLoading(true);
    try {
      const response = await axios.get<D>(url, {
        method: "GET",
        headers: {
          "X-API-KEY": `${process.env.NEXT_PUBLIC_API_KEY}`,
          Authorization: token,
        },
        ...options,
      });

      if (response) {
        setResponse(response);
      }
    } catch (error) {
      setError(error as AxiosError);
    }
    setLoading(false);
  };

  const refetch = () => {
    setRefetchIndex((prev) => prev + 1);
  };
  return { data: response?.data, response, loading, error, refetch };
}

export function usePost<ResponseData, InputData>(
  url: string,
  contentType?: "application/json" | "multipart/form-data",
  options?: AxiosRequestConfig,
) {
  const [response, setResponse] = useState<AxiosResponse<ResponseData> | null>(
    null,
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>();
  const { token } = useContext(AuthContext);

  const fetchPost = async (
    formData?: InputData,
  ): Promise<ResponseData | null> => {
    setLoading(true);
    try {
      const response = await axios.post<ResponseData>(url, formData, {
        method: "POST",
        headers: {
          "Content-Type": contentType ?? "application/json",
          "X-API-KEY": `${process.env.NEXT_PUBLIC_API_KEY}`,
          Authorization: token,
        },
        ...options,
      });

      setResponse(response);
      return response.data;
    } catch (error) {
      setError(error as AxiosError);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { data: response?.data, response, loading, error, fetchPost };
}

export function useDelete<D>() {
  const [response, setResponse] = useState<AxiosResponse<D> | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>();
  const { token } = useContext(AuthContext);

  const fetchDelete = async (url: string) => {
    setLoading(true);
    try {
      const response = await axios.delete(url, {
        method: "DELETE",
        headers: {
          "X-API-KEY": `${process.env.NEXT_PUBLIC_API_KEY}`,
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

  return { response, loading, error, fetchDelete };
}

export function usePatch<ResponseData, InputData>(url: string) {
  const [response, setResponse] = useState<AxiosResponse<ResponseData> | null>(
    null,
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>();
  const { token } = useContext(AuthContext);

  const fetchPatch = async (
    formData?: InputData,
  ): Promise<ResponseData | null> => {
    setLoading(true);
    try {
      const response = await axios.patch<ResponseData>(url, formData, {
        headers: {
          "X-API-KEY": `${process.env.NEXT_PUBLIC_API_KEY}`,
          Authorization: token,
        },
      });

      if (response) {
        setResponse(response);
        return response.data;
      }
    } catch (error) {
      setError(error as AxiosError);
      return null;
    } finally {
      setLoading(false);
    }
    return null;
  };

  return { response, loading, error, fetchPatch };
}
