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

import Button from "@/components/Button";
import ErrorMessage from "@/components/ErrorMessage";
import { Input } from "@/components/form/input";
import PasswordInput from "@/components/form/PasswordInput";
import Heading from "@/components/Heading";
import Loader from "@/components/Loader";

import { AuthContext } from "@/context/auth.context";
import type { UserSchemaT } from "@/schema/zodSchema";
import { userSchema } from "@/schema/zodSchema";

export default function LoginForm() {
  const t = useTranslations("LoginForm");
  const te = useTranslations("ErrorMessages");

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
    return <ErrorMessage message={te("loginFailed")} />;
  }

  return (
    <div className="space-y-6 px-4 py-4 sm:px-6 sm:py-8 shadow-my-shadow border border-gray-100 max-w-sm rounded-md mx-auto">
      <Heading headingLevel="h1" size="s2">
        {t("title")}
      </Heading>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8 flex flex-col justify-end items-end"
      >
        <div className="w-full flex flex-col gap-4">
          <Input
            type="text"
            name="username"
            label={t("username")}
            register={register}
            placeholder="novak"
            error={errors.username}
          />
          <PasswordInput
            name="password"
            register={register}
            error={errors.password}
          />
        </div>
        <Button style="primary" type="submit" disabled={isSubmitting}>
          {t("button")}
        </Button>
      </form>
    </div>
  );
}
