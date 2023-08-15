"use client";

import type { SubmitHandler } from "react-hook-form";
import type { LoginResponse } from "@/types/types";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useIntl } from "react-intl";

import { AdminUrl, loginUrl } from "@/config/router";

import { usePost } from "@/hooks/api";

import Loader from "@/components/Loader";

import { AuthContext } from "@/provider/AuthProvider";
import type { UserSchemaT } from "@/schema/zodSchema";
import { userSchema } from "@/schema/zodSchema";

import LoginForm from "./forms/LoginForm";

export default function Login() {
  const intl = useIntl();
  const router = useRouter();
  const { login } = useContext(AuthContext);
  const { loading, error, fetchPost } = usePost<LoginResponse, UserSchemaT>(
    loginUrl,
  );

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    register,
    control,
  } = useForm<UserSchemaT>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit: SubmitHandler<UserSchemaT> = async (formData) => {
    const fetchedData = await fetchPost(formData);
    if (error || !fetchedData) {
      return intl.formatMessage({
        id: "containers.login.errorMessage",
        defaultMessage: "Login failed, please try again later!",
      });
    }
    if (loading || isSubmitting) {
      return <Loader />;
    }
    login(fetchedData.access_token);
    router.push(AdminUrl.home);
  };

  return (
    <LoginForm
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
      register={register}
      errors={errors}
      control={control}
    />
  );
}
