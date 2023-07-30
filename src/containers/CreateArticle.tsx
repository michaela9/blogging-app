import React from "react";

import Heading from "@/components/Heading";

const CreateArticle = () => {
  return (
    <div className="space-y-6">
      <div className="flex gap-4 items-center">
        <Heading headingLevel="h1" size="s1">
          Create Article
        </Heading>
        <button className="bg-primary rounded-md px-4 py-2 text-white">
          Publish Article
        </button>
      </div>
      <form className="space-y-8 flex flex-col justify-end items-end">
        <div className="w-full space-y-4">
          <div className="flex flex-col gap-2">
            <label>Article Title</label>
            <input
              className="rounded-md border-gray-300"
              placeholder="My first article"
            />
          </div>
          <label>Featured Image</label>
          <button className="text-white bg-gray-500 rounded-md px-4 py-2">
            upload the image
          </button>
          <div className="flex flex-col gap-2">
            <label>Content</label>
            <textarea
              className="rounded-md border-gray-300"
              placeholder="Content"
            />
          </div>
        </div>
        <button className="bg-primary px-4 py-2 text-white rounded-md">
          Log in
        </button>
      </form>
    </div>
  );
};

export default CreateArticle;
