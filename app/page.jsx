import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi"

import Socials from "@/components/Socials";
import Photo from '@/components/Photos'

export default function Home() {
  return (
  <section className="h-full">
    <div className="flex flex-col space-y-8 container mx-auto items-center justify-between pt-8">
      <div>
        <Photo/>

      </div>
      <div className="text-left">
        <h1 className="text-xl ">About Me</h1>
        <h1 className=" border-b">Hi, my name is Rohun Gowda</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
         Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
         laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
         architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.
        </p>
      </div>
      <div className="flex justify-center items-center space-x-20">
        <Button>
          <span>Download Resume</span>
          <FiDownload/>
        </Button>
          
        <Socials/>
      </div>
    </div>

  </section>
  );
}
