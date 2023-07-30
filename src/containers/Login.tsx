import React from "react";

import Heading from "@/components/Heading";

const Login = () => {
  return (
    <div>
      <div className="space-y-6 px-6 py-8 shadow-xl border border-gray-100 max-w-sm rounded-md mx-auto">
        <Heading headingLevel="h1" size="s2">
          Log In
        </Heading>
        <form className="space-y-8 flex flex-col justify-end items-end">
          <div className="w-full space-y-4">
            <div className="flex flex-col gap-2">
              <label>Email</label>
              <input
                className="rounded-md border-gray-300"
                placeholder="jmeno@gmail.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Password</label>
              <input
                className="rounded-md border-gray-300"
                placeholder="****"
              />
            </div>
          </div>
          <button className="bg-primary px-4 py-2 text-white rounded-md">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
