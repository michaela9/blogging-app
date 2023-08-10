"use client";
import type { UseFormRegister } from "react-hook-form";

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

type Props = Omit<JSX.IntrinsicElements["input"], "className"> & {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: UseFormRegister<any>;
  errorMessage?: string;
};

export default function PasswordField({
  name,
  register,
  errorMessage,
  ...rest
}: Props) {
  const [visiblePassword, setVisiblePassword] = useState(false);

  return (
    <div className="relative">
      <div
        onClick={() => setVisiblePassword(!visiblePassword)}
        className="absolute inset-y-0 right-0 flex items-center px-2 hover:cursor-pointer"
      >
        {visiblePassword ? (
          <EyeSlashIcon className="h-6 w-6 text-nb-black" />
        ) : (
          <EyeIcon className="h-6 w-6 text-nb-black" />
        )}
      </div>
      <input
        id={name}
        type={visiblePassword ? "text" : "password"}
        {...(register ? register("password") : {})}
        className="rounded-md border-gray-300 w-full"
        {...rest}
      />
    </div>
  );
}
