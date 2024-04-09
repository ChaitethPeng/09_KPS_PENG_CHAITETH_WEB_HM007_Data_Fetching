

// import DetailStoryComponent from "@/components/DetailStoryComponent";
// import { getStoryByIdService } from "../../services/story.service";
// const DetailStoryComponent = async ({children}) => { 

//     const movieData = await getStoryByIdService("params.movie_id")
//       return (
//         <main>
//           <div className="bg-red-800 w-full">
         
//             <DetailStoryComponent param={movieData}/>
          
//         </div>
//         </main>
//       )
//     }

import React from "react";
import { getStoryByIdService } from "../../services/story.service";

const DetailStoryComponent = async ({params:{id}}) => {
  const movieData = await  getStoryByIdService(id);
  console.log(movieData);

  
  return (
    <>

              <div className=" grid-flow-col grid  grid-cols-3 pt-10 pb-16 p-6 bg-red-800  text-white">
                <div className="col-span-2">
                  <img
                    className="w-full"
                    src={movieData?.payload?.image}
                    alt=""
                  />
                </div>
                <div className="pl-8">
                  <div className="mb-16">
                    <h1 className="text-2xl font-bold">{movieData?.payload?.Director} ({movieData?.payload?.released_year})</h1>
                    <p class=" dark:text-gray-300 text-sm mb-4">{movieData?.payload?.runtime}</p>
                    <p class=" dark:text-gray-300 text-sm mb-4">
                    {movieData?.payload?.genre}
                    </p>
                    <span>Star</span>
                  </div>
                  <div className="mb-24">
                    <h1 className="text-2xl font-bold">{movieData?.payload?.movie_title} </h1>
                    <p class=" dark:text-gray-300 text-sm mt-2">
                      {movieData?.payload?.description}
                    </p>
                  </div>
                  <div>
                    <p class=" dark:text-gray-300 text-sm mt-2">
                      {movieData?.payload?.posted_at}
                    </p>
                  </div>
                </div>
              </div>
           
    </>
  );
};

export default DetailStoryComponent;
