"use client";

import type { SubmitHandler } from "react-hook-form";
import type { LoginResponse } from "@/types/types";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import { z } from "zod";

import { AdminUrl, loginUrl } from "@/config/router";

import useToken from "@/hooks/useToken";

import Button from "@/components/Button";
import FormFieldWrapper from "@/components/form/FormFieldWrapper";
import Label from "@/components/form/Label";
import PasswordField from "@/components/form/PasswordField";
import TextField from "@/components/form/TextField";
import Heading from "@/components/Heading";

const userSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  password: z
    .string()
    .min(3, { message: "Heslo musí obsahovat minimálně 3 charakterů" }),
});

export type UserSchemaT = z.infer<typeof userSchema>;

const apiKey = "b21611a3-d995-499c-80d5-4e0f72db5ae1";
const Login = () => {
  const intl = useIntl();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [tokenBase, setTokenBase] = useState("");
  const [, setToken] = useToken();

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<UserSchemaT>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit: SubmitHandler<UserSchemaT> = async (formData) => {
    setIsLoading(true);
    try {
      const response = await axios.post<LoginResponse>(
        loginUrl,
        {
          username: formData.username,
          password: formData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-API-KEY": apiKey,
          },
        },
      );
      if (!response.data) {
        throw new Error("Network response was not ok.");
      }
      if (response.data) {
        const data = response.data;
        console.log(response.data);
        const accessToken = data.access_token;
        setTokenBase(accessToken);
        setToken(accessToken);
        localStorage.setItem("accessToken", accessToken);
        router.push(AdminUrl.index);
      }
      setIsLoading(false);
    } catch (error) {
      throw new Error("Error login user. Please try again later.");
    }
  };

  return (
    <div className="space-y-6 px-4 py-4 sm:px-6 sm:py-8 shadow-xl border border-gray-100 max-w-sm rounded-md mx-auto">
      {isLoading ? "Is Loading" : "Not loading"}
      {tokenBase}
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
            />
            {errors.username && <span>{errors.username.message}</span>}
          </FormFieldWrapper>
          <Label name="password">
            {intl.formatMessage({
              id: "containers.login.password",
              defaultMessage: "Password",
            })}
            <PasswordField name="password" register={register} />
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
};

export default Login;
