import React from "react";

const DetailStoryComponent = async ({ movieData }) => {
  return (
    <>
      <div className=" grid-flow-col grid  grid-cols-3 pt-10 pb-16 p-6 bg-red-800  text-white">
        <div className="col-span-2">
          <img className="w-full" src={data?.image} alt="" />
        </div>
        <div className="pl-8">
          <div className="mb-16">
            <h1 className="text-2xl font-bold">
              {data?.director} ({data.released_year})
            </h1>
            <p className=" dark:text-gray-300 text-sm mb-4">{data.runtime}</p>
            <p className=" dark:text-gray-300 text-sm mb-4">{data.genre}</p>
            <span>Star</span>
          </div>
          <div className="mb-24">
            <h1 className="text-2xl font-bold">{data.movie_title} </h1>
            <p className=" dark:text-gray-300 text-sm mt-2">
              {data.description}
            </p>
          </div>
          <div>
            <p className=" dark:text-gray-300 text-sm mt-2">
              {formattedPostedDate}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailStoryComponent;
