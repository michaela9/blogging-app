"use client";

import type { SubmitHandler } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import { z } from "zod";

import { AdminUrl, baseUrl } from "@/config/router";

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
    .min(5, { message: "Heslo musí obsahovat minimálně 5 charakterů" }),
});

export type UserSchemaT = z.infer<typeof userSchema>;
type LoginResponseData = {
  access_token: string;
};
const Login = () => {
  const intl = useIntl();
  const router = useRouter();

  const {
    handleSubmit,
    formState: { errors },
  } = useForm<UserSchemaT>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit: SubmitHandler<UserSchemaT> = async (formData) => {
    try {
      const response = await axios.post<LoginResponseData>(
        `${baseUrl}/login`,
        {
          username: formData.username,
          password: formData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-API-KEY": "682a44a4-eced-4f1c-8749-752b5776ee22",
          },
        },
      );
      if (!response.data) {
        throw new Error("Network response was not ok.");
      }
      if (response.data) {
        const data = response.data;
        const accessToken = data.access_token;
        localStorage.setItem("accessToken", accessToken);
        router.push(AdminUrl.index);
      }
    } catch (error) {
      throw new Error("Error editing article. Please try again later.");
    }
  };

  return (
    <div className="space-y-6 px-6 py-8 shadow-xl border border-gray-100 max-w-sm rounded-md mx-auto">
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
            <TextField name="username" placeholder="Username123" />
            {errors.username && <span>{errors.username.message}</span>}
          </FormFieldWrapper>
          <Label name="password">
            {intl.formatMessage({
              id: "containers.login.password",
              defaultMessage: "Password",
            })}
            <PasswordField name="password" />
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
