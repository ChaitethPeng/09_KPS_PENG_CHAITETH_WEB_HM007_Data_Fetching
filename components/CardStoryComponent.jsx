import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { getStoryByTypeService } from "@/src/app/services/story.service";
import Link from "next/link";
import { async } from "./../src/app/services/story.service";

export async function CardStoryComponent({ genre, movieData }) {
  const movies = movieData || (await getStoryByTypeService(genre));

  return (
    <Carousel >
      <CarouselContent>
        {movies.map((data, index) => (
          <CarouselItem
            key={index}
            className="lg:basis-1/4 md:basis-1/3 lg:gap-5"
          >
            <div className="w-[300px] h-[280px] bg-white border rounded-md border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 p-5 ">
              <>
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                  <Link href={`/movieDetail/${data.movie_id}`}>
                    <img
                      className="w-[300px] h-[140px] transition duration-300 ease-in-out hover:scale-110"
                      src={
                        data?.image
                          ? data?.image
                          : "https://dalstrong.com/cdn/shop/articles/shutterstock_701242195.jpg?v=1626356986"
                      }
                      alt="photos"
                    />
                  </Link>
                </div>

                <div className="pt-2">
                  <Link href={`/movieDetail/${data.movie_id}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white  line-clamp-1">
                      {data?.movie_title}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
                      {data?.description}
                    </p>
                  </Link>
                </div>
              </>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default CardStoryComponent;
