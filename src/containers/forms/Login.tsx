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

import Button from "@/components/Button";
import FormFieldWrapper from "@/components/form/FormFieldWrapper";
import Label from "@/components/form/Label";
import PasswordField from "@/components/form/PasswordField";
import TextField from "@/components/form/TextField";
import Heading from "@/components/Heading";
import Loader from "@/components/Loader";

import { AuthContext } from "@/provider/AuthProvider";
import type { UserSchemaT } from "@/schema/zodSchema";
import { userSchema } from "@/schema/zodSchema";

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
  } = useForm<UserSchemaT>({
    resolver: zodResolver(userSchema),
  });
  const onSubmit: SubmitHandler<UserSchemaT> = async (formData) => {
    const fetchedData = await fetchPost(formData);

    if (error) {
      return intl.formatMessage({
        id: "containers.recentArticles.errorMessage",
        defaultMessage: "Login failed",
      });
    }

    if (loading || isSubmitting) {
      return <Loader />;
    }
    if (!fetchedData) {
      return intl.formatMessage({
        id: "containers.recentArticles.missingData",
        defaultMessage: "Missing data",
      });
    }

    login(fetchedData.access_token);
    router.push(AdminUrl.home);
  };

  return (
    <div className="space-y-6 px-4 py-4 sm:px-6 sm:py-8 shadow-xl border border-gray-100 max-w-sm rounded-md mx-auto">
      <Heading headingLevel="h1" size="s2">
        {intl.formatMessage({
          id: "containers.login.title",
          defaultMessage: "Log In",
        })}
      </Heading>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8 flex flex-col justify-end items-end"
      >
        <div className="w-full flex flex-col gap-4">
          <FormFieldWrapper>
            <Label name="username">
              {intl.formatMessage({
                id: "containers.login.username",
                defaultMessage: "Username",
              })}
            </Label>
            <TextField
              name="username"
              placeholder="Username123"
              register={register}
              errorMessage={errors?.username?.message}
            />
            {errors.username && <span>{errors.username.message}</span>}
          </FormFieldWrapper>
          <Label name="password">
            {intl.formatMessage({
              id: "containers.login.password",
              defaultMessage: "Password",
            })}
            <PasswordField
              name="password"
              register={register}
              errorMessage={errors?.password?.message}
            />
          </Label>
        </div>
        <Button style="primary" type="submit">
          {intl.formatMessage({
            id: "containers.login.submitButton",
            defaultMessage: "Log In",
          })}
        </Button>
      </form>
    </div>
  );
}
