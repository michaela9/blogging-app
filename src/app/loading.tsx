"use client";

import { PuffLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <PuffLoader color="#FFA23E" size={200} />
    </div>
  );
};
export default Loading;
