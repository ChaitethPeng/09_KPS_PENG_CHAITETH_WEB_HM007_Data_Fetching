

import React from "react";
import { getStoryByIdService } from "../../services/story.service";
import StarRating from "@/components/StarRating";

const DetailStoryComponent = async ({ params: { id } }) => {
  const movieData = await getStoryByIdService(id);
  const postedDate = new Date(movieData?.payload?.posted_at);
  const formattedPostedDate = postedDate.toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });

  return (
    <>
      <div className="grid-flow-col grid grid-cols-3 pt-24 pb-16 p-6 bg-red-800 text-white">
        <div className="col-span-2">
          <img className="w-full" src={movieData?.payload?.image} alt="" />
        </div>
        <div className="pl-8">
          <div className="mb-16">
            <h1 className="text-2xl font-bold">
              {movieData?.payload?.director} (
              {movieData?.payload?.released_year})
            </h1>
            <p className="dark:text-gray-300 text-sm mb-4">
              {movieData?.payload?.runtime} minutes
            </p>
            <p className="dark:text-gray-300 text-sm mb-4 italic ">
              {movieData?.payload?.genre}
            </p>
           
            <StarRating rating={movieData?.payload?.rating} />
      
          </div>
          <div className="mb-24">
            <h1 className="text-2xl font-bold">
              {movieData?.payload?.movie_title}{" "}
            </h1>
            <p className="dark:text-gray-300 text-sm mt-2">
              {movieData?.payload?.description}
            </p>
          </div>
          <div>
            <p className="dark:text-gray-300 text-sm mt-2">
              {formattedPostedDate}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailStoryComponent;

