"use client";

import type { SubmitHandler } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import { z } from "zod";

import { AdminUrl, baseUrl, tenantsUrl } from "@/config/router";

import Button from "@/components/Button";
import FormFieldWrapper from "@/components/form/FormFieldWrapper";
import Label from "@/components/form/Label";
import PasswordField from "@/components/form/PasswordField";
import TextField from "@/components/form/TextField";
import Heading from "@/components/Heading";
import type { Tenant } from "@/types/types";

const createUserSchema = z.object({
  name: z.string().min(1, { message: "Username is required" }),
  password: z
    .string()
    .min(5, { message: "Heslo musí obsahovat minimálně 5 charakterů" }),
});

export type CreateUserSchemaT = z.infer<typeof createUserSchema>;

const Signup = () => {
  const intl = useIntl();
  const router = useRouter();

  const {
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserSchemaT>({
    resolver: zodResolver(createUserSchema),
  });

  const onSubmit: SubmitHandler<CreateUserSchemaT> = async (formData) => {
    try {
      const response = await axios.post<Tenant>(
        tenantsUrl,
        {
          name: formData.name,
          password: formData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-API-KEY": process.env.APP_API_KEY,
          },
        },
      );
      if (!response.data) {
        throw new Error("Network response was not ok.");
      }
      if (response.data) {
        const data = response.data;
        console.log(data);
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
            <TextField name="name" placeholder="Jan Novák" />
            {errors.name && <span>{errors.name.message}</span>}
          </FormFieldWrapper>
          <Label name="password">
            {intl.formatMessage({
              id: "containers.signup.password",
              defaultMessage: "Password",
            })}
            <PasswordField name="password" />
          </Label>
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