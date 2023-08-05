"use client";

import type { SubmitHandler } from "react-hook-form";
import type { TenantT } from "@/types/types";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useIntl } from "react-intl";
import { z } from "zod";

import { AppUrl, tenantsUrl } from "@/config/router";

import useZodForm from "@/hooks/useZodForm";

import Button from "@/components/Button";
import FormFieldWrapper from "@/components/form/FormFieldWrapper";
import Label from "@/components/form/Label";
import PasswordField from "@/components/form/PasswordField";
import TextField from "@/components/form/TextField";
import Heading from "@/components/Heading";

const createUserDefaultValues = {
  name: "",
  password: "",
  passwordRepeat: "",
};

const createUserSchema = z
  .object({
    name: z.string().min(1, { message: "Name is required" }),
    password: z
      .string()
      .min(3, { message: "Minimum length of password id 3 letters" }),
    passwordRepeat: z
      .string()
      .min(1, { message: "FIll in the sa,e password again" }),
  })

  .superRefine(({ passwordRepeat, password }, ctx) => {
    if (passwordRepeat !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Passwords are not the same.",
        path: ["passwordRepeat"],
      });
    }
  });

export type CreateUserSchemaT = z.infer<typeof createUserSchema>;

const Signup = () => {
  const intl = useIntl();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState("");

  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useZodForm({
    schema: createUserSchema,
    defaultValues: createUserDefaultValues,
    mode: "onSubmit",
  });

  const onSubmit: SubmitHandler<CreateUserSchemaT> = async (formData) => {
    setIsLoading(true);
    try {
      const response = await axios.post<TenantT>(tenantsUrl, {
        name: formData.name,
        password: formData.password,
      });
      if (!response.data) {
        throw new Error("Network response was not ok.");
      }
      if (response.data) {
        console.log(response.data);
        const data = response.data;
        setApiKey(data.apiKey);
        router.push(AppUrl.login);
      }
      reset(createUserDefaultValues);
      setIsLoading(false);
    } catch (error) {
      throw new Error("Error signup. Please try again later.");
    }
    reset(createUserDefaultValues);
  };

  return (
    <div className="space-y-6 px-4 py-4 sm:px-6 sm:py-8 shadow-xl border border-gray-100 max-w-sm rounded-md mx-auto">
      {isLoading ? "is loading" : "not loading"}
      <p>{apiKey}</p>
      <Heading headingLevel="h1" size="s2">
        {intl.formatMessage({
          id: "containers.signup.title",
          defaultMessage: "Sign Up",
        })}
      </Heading>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8 flex flex-col justify-end items-end"
      >
        <div className="w-full flex flex-col gap-4">
          <FormFieldWrapper>
            <Label name="name">
              {intl.formatMessage({
                id: "containers.signup.name",
                defaultMessage: "Name",
              })}
            </Label>
            <TextField
              name="name"
              placeholder="Jan Novák"
              register={register}
              errorMessage={errors?.name?.message}
            />
          </FormFieldWrapper>
          <FormFieldWrapper>
            <Label name="password">
              {intl.formatMessage({
                id: "containers.signup.password",
                defaultMessage: "Password",
              })}
            </Label>
            <PasswordField
              name="password"
              register={register}
              errorMessage={errors?.password?.message}
            />
          </FormFieldWrapper>
          <FormFieldWrapper>
            <Label name="passwordRepeat">
              {intl.formatMessage({
                defaultMessage: "Password Repeat",
                id: "container.forms.signUp.passwordRepeat",
              })}
            </Label>
            <PasswordField
              name="passwordRepeat"
              register={register}
              errorMessage={errors?.passwordRepeat?.message}
            />
          </FormFieldWrapper>
        </div>
        <Button style="primary" type="submit">
          {intl.formatMessage({
            id: "containers.signup.submitButton",
            defaultMessage: "Sign Up",
          })}
        </Button>
      </form>
    </div>
  );
};

export default Signup;
