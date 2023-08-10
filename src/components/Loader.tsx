import React from "react";
import { PuffLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <PuffLoader color="#FFA23E" size={70} />
    </div>
  );
}
