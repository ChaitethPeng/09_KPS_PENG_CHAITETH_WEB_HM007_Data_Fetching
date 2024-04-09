import './globals.css'
import CardStoryComponent from "@/components/CardStoryComponent";
import { getAllStoryService,getStoryByTypeService } from "./services/story.service";

export default async function Movive({ children }) {

    const allMovie = await getAllStoryService();
    const action = await getStoryByTypeService("Action")
    const brotith = await getStoryByTypeService("drama")
    const hollywood = await getStoryByTypeService("hollywood")
      return (
        <main>
          <div className="bg-red-800 w-full">
          <div className="p-10">
            <h1 className="mb-5 font-bold text-3xl text-white">All Story</h1>
            <CardStoryComponent movieData={allMovie} />
          </div>
          <div className="p-10">
            <h1 className="mb-5 font-bold text-3xl text-white">Action Movie</h1>
            <CardStoryComponent movieData={action} />
          </div>
          <div className="p-10">
            <h1 className="mb-5 font-bold text-3xl text-white">Drama Movie</h1>
            <CardStoryComponent movieData={brotith} />
          </div>
          <div className="p-10">
            <h1 className="mb-5 font-bold text-3xl text-white">Hollywood</h1>
            <CardStoryComponent movieData={hollywood} />
          </div>
          
        </div>
        </main>
      )
    }