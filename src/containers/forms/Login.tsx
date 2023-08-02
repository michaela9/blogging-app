"use client";


import type { SubmitHandler } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import { z } from "zod";

import Button from "@/components/Button";
import Heading from "@/components/Heading";

const userSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  password: z
    .string()
    .min(5, { message: "Heslo musí obsahovat minimálně 5 charakterů" }),
});

export type UserSchemaT = z.infer<typeof userSchema>;

export type LoginData = {
  username: string;
  password: string;
};

export type LoginResponse = {
  accessToken: string;
};

const Login = () => {
  const intl = useIntl();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSchemaT>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit: SubmitHandler<UserSchemaT> = async (formData, e) => {
    console.log(formData);
    // setErrorMessages([]);
    // login with username and PasswordInput with loading error handling,
    e.preventDefault();
    try {
      const response = await fetch(
        "https://fullstack.exercise.applifting.cz/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-API-KEY": "682a44a4-eced-4f1c-8749-752b5776ee22",
          },
          body: JSON.stringify({
            username: formData.username,
            password: formData.password,
          }),
        },
      );
      if (!response.ok) {
        throw new Error("Login failed");
      }
      // TODO: fix typescript
      const data = await response.json();
      const accessToken: string = data.access_token;
      localStorage.setItem("accessToken", accessToken);
      router.push("/admin");
    } catch (error) {
      // TODO: error handling
      // <FormErrorMessage errorMessage={error.message} />;
      console.error("Login failed:", error.message);
    }
  };

  return (
    <div className="space-y-6 px-6 py-8 shadow-xl border border-gray-100 max-w-sm rounded-md mx-auto">
      <Heading headingLevel="h1" size="s2">
        {intl.formatMessage({
          id: "containers.login.heading",
          defaultMessage: "Log In",
        })}
      </Heading>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8 flex flex-col justify-end items-end"
      >
        <div className="w-full flex flex-col gap-4">
          <label>
            {intl.formatMessage({
              id: "containers.login.email",
              defaultMessage: "Email",
            })}
            <input
              id="username"
              type="text"
              {...register("username")}
              placeholder="jmeno@gmail.com"
              className="rounded-md border-gray-300 block w-full"
            />
            {errors.username && (
              <p className="text-xs italic text-red-500 mt-2">
                {errors.username?.message}
              </p>
            )}
          </label>
          <label htmlFor="password">
            {intl.formatMessage({
              id: "containers.login.password",
              defaultMessage: "Password",
            })}
            <input
              id="password"
              type="password"
              {...register("password")}
              className="rounded-md border-gray-300 block w-full"
            />
            {errors.password && (
              <p className="text-xs italic text-red-500 mt-2">
                {errors.password?.message}
              </p>
            )}
          </label>
        </div>
        <Button style="primary" type="submit">
          {intl.formatMessage({
            id: "containers.login.button",
            defaultMessage: "Log In",
          })}
        </Button>
      </form>
    </div>
  );
};

export default Login;
