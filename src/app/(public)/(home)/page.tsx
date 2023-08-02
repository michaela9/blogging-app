"use client";

import type { Metadata } from "next";

import RecentArticles from "@/containers/RecentArticles";
import { useEffect, useState } from "react";

export const metadata: Metadata = {
  title: "Homepage - Recent Articles",
};

// const getBlogPosts = async () => {
//   const data = await fetch(
//     `https://fullstack.exercise.applifting.cz/articles?limit=${5}&offset=${0}`,
//   );
//   return data.json();
// };

// {
//   headers: {
//     "Content-Type": "application/json",
//     "X-API-KEY": "682a44a4-eced-4f1c-8749-752b5776ee22",
//     Authorization: "08709433-7233-476f-9a70-ac1dbf954e87",
//   },
// },
// export async function fetchData(url: string, apiKey: string): Promise<any> {
//   fetch(
//     `https://fullstack.exercise.applifting.cz/articles?limit=${5}&offset=${0}`,
//     {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         "X-API-KEY": "682a44a4-eced-4f1c-8749-752b5776ee22",
//         Authorization: "08709433-7233-476f-9a70-ac1dbf954e87",
//       },
//     },
//   )
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok.");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       // Process the fetched data here
//       console.log(data);
//     })
//     .catch((error) => {
//       // Handle errors here
//       console.error(error);
//     });
// }

//   if (!response.ok) {
//     throw new Error("Network response was not ok.");
//   }

//   const data = await response.json();
//   return data;
//   console.log(data);
// } catch (error) {
//   // throw new Error("Error fetching data from the API: " + error.message);
// }

export default function Page() {
  // const data = await getBlogPosts();
  // const posts = data;
  // console.log(posts);
  const [data, setData] = useState();

  const limit = 20;
  const offset = 5;

  const getApiData = async () => {
    const response = await fetch(
      "https://fullstack.exercise.applifting.cz/articles",
      {
        method: "POST",
        headers: {
          // "Content-Type": "application/json",
          "X-API-KEY": "682a44a4-eced-4f1c-8749-752b5776ee22",
          // Authorization: "08709433-7233-476f-9a70-ac1dbf954e87",
        },
      },
    ).then((response) => response.json());

    // update the state
    setData(response);
  };

  useEffect(() => {
    getApiData();
  }, []);

  console.log(data);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       `https://fullstack.exercise.applifting.cz/articles`,
  //       {
  //         method: "GET",
  //         headers: {
  //           // "Content-Type": "application/json",
  //           "X-API-KEY": "682a44a4-eced-4f1c-8749-752b5776ee22",

  //           // Authorization: "08709433-7233-476f-9a70-ac1dbf954e87",
  //         },
  //         // body: JSON.stringify({
  //         //   limit: 10,
  //         // }),
  //       },
  //     );
  //     const data = await response.json();
  //     // console.log(data);
  //   };

  // fetchData();
  // }, []);

  return (
    <h1>shush</h1>
    // <button
    //   onClick={() =>
    //     fetch(`https://fullstack.exercise.applifting.cz/articles`, {
    //       method: "GET",
    //       headers: {
    //         "X-API-KEY": "682a44a4-eced-4f1c-8749-752b5776ee22",
    //       },
    //     }).then((response) => response.json())
    //     setData(response)
    //   }
    // >
    //   dhdkuh
    // </button>
  );
  // return <RecentArticles />;
}
