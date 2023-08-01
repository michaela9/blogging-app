"use client";

import type { FormEvent } from "react";

import Error from "next/error";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useIntl } from "react-intl";

import Button from "@/components/Button";
import Heading from "@/components/Heading";
import FormErrorMessage from "@/components/form/FormErrorMessage";

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
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleLogin = async (e: FormEvent) => {
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
      <FormErrorMessage errorMessage={error.message} />;

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
        onSubmit={handleLogin}
        className="space-y-8 flex flex-col justify-end items-end"
      >
        <div className="w-full flex flex-col gap-4">
          <label>
            {intl.formatMessage({
              id: "containers.login.email",
              defaultMessage: "Email",
            })}
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="rounded-md border-gray-300 block w-full"
              placeholder="jmeno@gmail.com"
            />
          </label>

          <label htmlFor="password">
            {intl.formatMessage({
              id: "containers.login.password",
              defaultMessage: "Password",
            })}
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="rounded-md border-gray-300 block w-full"
            />
          </label>
        </div>
        <Button style="primary" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
