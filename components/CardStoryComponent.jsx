
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Link from "next/link";
const CardStoryComponet = async ({movieData}) => {
  return (
    <>
     <Carousel className="">
      <CarouselContent >
        {movieData?.payload?.map((data, index) => (
          // md:basis-1/2
          <CarouselItem key={index} className=" lg:basis-1/4 md:basis-1/3  lg:gap-5">
           <div class="w-[300px] h-[280px] bg-white border rounded-md border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 p-5 ">
            <>
              <div>
                <a href="#">
                  <Link href={`/movieDetail/${data.movie_id}`}>
                  <img
                    className=""
                    src={data.image}
                    alt="photos"
                  />
                  </Link>
                </a>
              </div>

              <div className="pt-2">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white  line-clamp-1">
                    {data.director}
                  </h5>
                </a>
                <p class=" font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
                  {data.description}
                </p>
              </div>
            </>

        </div>
          </CarouselItem>
        ))}
      </CarouselContent>
     
    </Carousel>
    
    </>
  );
};
export default CardStoryComponet;

