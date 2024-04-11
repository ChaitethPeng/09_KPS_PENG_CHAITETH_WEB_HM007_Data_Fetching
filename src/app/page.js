import "./globals.css";
import CardStoryComponent from "@/components/CardStoryComponent";
import { getAllStoryService } from "./services/story.service";

export default async function HomePage({ children }) {
  const allMovie = await getAllStoryService();
  const genres = Array.from(
    new Set(allMovie.payload.map((movie) => movie?.genre))
  );

  return (
    <main>
      <img
        className="brightness-50 "
        src="https://puui.wetvinfo.com/vcover_hz_pic/0/2knhnaakii18oxj1683882661123/0?imageMogr2/thumbnail/600x%7CimageMogr2/thumbnail/600x"
        alt=""
      />
      <div></div>
      <div className="bg-red-950 w-full p-10">
        <div className="mb-5">
          <h1 className="mb-5 font-bold text-2xl text-white">All Story</h1>
          <CardStoryComponent movieData={allMovie.payload} />
        </div>
        {genres.map((genre, index) => (
          <div key={genre} className="mb-5">
            <h2 className="mb-5 font-bold text-2xl text-white">
              {genre} Movie &gt;
            </h2>
            <CardStoryComponent
              genre={genre}
              movieData={allMovie.payload.filter(
                (movie) => movie.genre === genre
              )}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
