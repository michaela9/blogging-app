"use client";

import type { SubmitHandler } from "react-hook-form";
import type { LoginResponse } from "@/types/types";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useContext } from "react";
import { useForm } from "react-hook-form";

import { AppUrl, loginEndpoint } from "@/config/router";

import { usePost } from "@/hooks/api";

import ErrorMessage from "@/components/ErrorMessage";
import Loader from "@/components/Loader";

import { AuthContext } from "@/context/auth.context";
import type { UserSchemaT } from "@/schema/zodSchema";
import { userSchema } from "@/schema/zodSchema";

import LoginForm from "./forms/LoginForm";

export default function Login() {
  const t = useTranslations("ErrorMessages");

  const router = useRouter();
  const { login } = useContext(AuthContext);
  const { loading, error, fetchPost } = usePost<LoginResponse, UserSchemaT>(
    loginEndpoint,
  );

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    register,
  } = useForm<UserSchemaT>({
    resolver: zodResolver(userSchema),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<UserSchemaT> = async (formData) => {
    const fetchedData = await fetchPost(formData);

    if (fetchedData && fetchedData.access_token) {
      login(fetchedData.access_token, fetchedData.expires_in);
      router.push(AppUrl.myArticles);
    }
  };

  if (loading || isSubmitting) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={t("loginFailed")} />;
  }

  return (
    <LoginForm
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
      register={register}
      errors={errors}
      isSubmitting={isSubmitting}
    />
  );
}
