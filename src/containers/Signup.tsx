"use client";

import type { TenantT } from "@/types/types";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";

import { AppUrl, tenantsEndpoint } from "@/config/router";

import { usePost } from "@/hooks/api";

import Loader from "@/components/Loader";

import { AuthContext } from "@/context/auth.context";
import type { CreateUserSchemaT } from "@/schema/zodSchema";
import { createUserSchema } from "@/schema/zodSchema";

import SignupForm from "./forms/SignupForm";

export default function Signup() {
  const router = useRouter();
  const { signup } = useContext(AuthContext);

  const { loading, error, fetchPost } = usePost<TenantT, CreateUserSchemaT>(
    tenantsEndpoint,
  );

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    register,
  } = useForm<CreateUserSchemaT>({
    resolver: zodResolver(createUserSchema),
  });

  const onSubmit: SubmitHandler<CreateUserSchemaT> = async (formData) => {
    const fetchedData = await fetchPost(formData);
    if (isSubmitting || loading) {
      return <Loader />;
    }

    if (!fetchedData || error) {
      return error;
    }
    signup(fetchedData.apiKey);
    router.push(AppUrl.myArticles);
  };

  return (
    <SignupForm
      onSubmit={() => handleSubmit(onSubmit)}
      register={register}
      errors={errors}
      isSubmitting={isSubmitting}
    />
  );
}
