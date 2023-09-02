import { PuffLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <PuffLoader color="#2B7EFB" size={200} />
    </div>
  );
}
