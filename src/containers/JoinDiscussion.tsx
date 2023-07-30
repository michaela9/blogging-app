import Image from "next/image";
import React from "react";

const profilePhoto = "/img.png";
const JoinDiscussion = () => {
  return (
    <div className="flex gap-6">
      <Image
        src={profilePhoto}
        alt="Profile photo"
        className="shrink-0 w-10 h-10 object-cover overflow-hidden rounded-full"
        width={100}
        height={100}
      />
      <form className="w-full">
        <label className="sr-only">Join the disccussion</label>
        <input
          placeholder="Join the discussion"
          name="joinDiscussion"
          className="rounded-md border-gray-300 w-full"
        />
      </form>
    </div>
  );
};

export default JoinDiscussion;
