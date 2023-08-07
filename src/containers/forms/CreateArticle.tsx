"use client";

import type { SubmitHandler } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { articlesUrl, baseUrl } from "@/config/router";

const createArticleSchema = z.object({
  title: z.string(),
  perex: z.string(),
  content: z.string().min(1, { message: "Username is required" }),
  image: z.any(),
});

export type CreateArticleSchemaT = z.infer<typeof createArticleSchema>;

const CreateArticle = () => {
  // const [imageFile, setImageFile] = useState(null);
  const {
    handleSubmit,
    formState: { errors },
    register,
    control,
  } = useForm<CreateArticleSchemaT>({
    resolver: zodResolver(createArticleSchema),
  });

  // const onSubmit = (data) => {
  //   const formData = new FormData();
  //   formData.append("image", data.picture[0]);
  //   data = { ...data, picture: data.picture[0].name };
  //   formData.append("recipe", JSON.stringify(data));

  //   return fetch("/api/recipes/create", {
  //     method: "POST",
  //     body: formData,
  //   }).then((response) => {
  //     if (response.ok) {
  //       // Handle successful upload
  //     } else {
  //       // Handle error
  //     }
  //   });
  // };

  const onSubmit: SubmitHandler<CreateArticleSchemaT> = async (formData) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const myImage = formData.image;
      // data = { ...data, picture: data.picture[0].name };

      // console.log("formData", formData);
      // console.log("data", data);
      // formData.append("article", JSON.stringify(data));
      // console.log("article", formData);

      const imageUploadResponse = await axios.post(
        `${baseUrl}/images`,
        {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          image: myImage,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "X-API-KEY": " b21611a3-d995-499c-80d5-4e0f72db5ae1",
            Authorization: "1bfa77bc-50b1-4bfa-9463-3028dbac9400",
          },
        },
      );
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const imageId = imageUploadResponse.data[0].imageId as string;

      const articleCreateResponse = await axios.post(
        `${articlesUrl}`,
        {
          title: formData.title,
          content: formData.content,
          perex: formData.perex,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          imageId: imageId,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-API-KEY": " b21611a3-d995-499c-80d5-4e0f72db5ae1",
            Authorization: "1bfa77bc-50b1-4bfa-9463-3028dbac9400",
          },
        },
      );

      if (!articleCreateResponse.data) {
        throw new Error("Network response was not ok.");
      }

      if (articleCreateResponse.data) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const myData = articleCreateResponse.data;
        console.log(myData);
      }
    } catch (error) {
      throw new Error("Error creating article. Please try again later.");
    }
  };

  // const intl = useIntl();
  return (
    <form
      // onSubmit={handleSubmit(onSubmit)}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 flex flex-col justify-end items-end"
    >
      {/* <div className="flex gap-4 items-center">
        <Heading headingLevel="h1" size="s1">
          {intl.formatMessage({
            id: "containers.forms.createArticle.title",
            defaultMessage: "Create Article",
          })}
        </Heading>
        <Button style="primary" type="submit">
          {intl.formatMessage({
            id: "containers.forms.createArticle.articlePublish",
            defaultMessage: "Publish Article",
          })}
        </Button>
      </div> */}

      <div className="w-full space-y-4">
        <Controller
          control={control}
          name="image"
          rules={{ required: "The image is required" }}
          render={({ field: { value, onChange, ...field } }) => {
            return (
              <input
                {...field}
                // value={value?.fileName}
                // onChange={(event) => {
                //   onChange(event.target.files[0]);
                // }}
                type="file"
                id="image"
              />
            );
          }}
        />
        <input
          {...register("content", {
            required: "Content is required",
          })}
          type="text"
          id="content"
        />
        <input
          {...register("title", {
            required: "title is required",
          })}
          type="text"
          id="title"
        />
        <input
          {...register("perex", {
            required: "perex is required",
          })}
          type="text"
          id="perex"
        />
        <button>Submit</button>

        {/* <FormFieldWrapper>
          <Label name="title">
            {intl.formatMessage({
              id: "containers.forms.createArticle.articleTitle",
              defaultMessage: "Article Title",
            })}
          </Label>
          <TextField
            placeholder="My first article"
            name="title"
            register={register}
          />
          {errors.title && <span>{errors.title.message}</span>}
        </FormFieldWrapper>
        <FormFieldWrapper>
          <Label name="perex">
            {intl.formatMessage({
              id: "containers.forms.createArticle.perex",
              defaultMessage: "Perex",
            })}
          </Label>
          <TextAreaField placeholder="Perex" name="perex" register={register} />
        </FormFieldWrapper> */}
        {/* <FormFieldWrapper>
          <Label name="imageId">
            {intl.formatMessage({
              id: "containers.forms.createArticle.imageId",
              defaultMessage: "Image Path",
            })}
          </Label>
          <TextField
            placeholder="screenshot.png"
            name="imageId"
            register={register}
          />
          {errors.imageId && <span>{errors.imageId.message}</span>}
        </FormFieldWrapper> */}
        {/* <FormFieldWrapper>
          <Label name="image">
            {intl.formatMessage({
              id: "containers.forms.createArticle.image",
              defaultMessage: "Featured Image",
            })}
          </Label>
          <FileField name="image" register={register} />
        </FormFieldWrapper>
        <FormFieldWrapper>
          <Label name="content">
            {intl.formatMessage({
              id: "containers.forms.createArticle.content",
              defaultMessage: "Content",
            })}
          </Label>
          <TextAreaField
            placeholder="Content"
            name="content"
            className="h-[300px]"
            register={register}
          />
        </FormFieldWrapper> */}
      </div>
    </form>
  );
};

export default CreateArticle;
