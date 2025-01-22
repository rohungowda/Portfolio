import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi"

import Socials from "@/components/Socials";
import Photo from '@/components/Photos'

// hiehgt 100% of parent
// centers conatiner horizontal within aprent
// justify-between include space between items
export default function Home() {
  return (
  <section className="h-full">
    <div className="container mx-auto h-full">
      <div>
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 xl:space-x-12">
        
          <div className="text-center xl:text-left order-2 xl:order-none">
            <div className="text-[48px] xl:text-left-[80px] leading-[1.1] font-semibold">Hi, my name is Rohun Gowda</div>
            <div className="pb-8 text-[28px] xl:text-left-[40px] leading-[1.1] font-semibold text-accent">and I am a Software Developer</div>
            <div className="border-b pt-4 text-[28px] xl:text-left-[40px] leading-[1.1] font-semibold">About Me</div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nullam vehicula, nisi sit amet tincidunt gravida, nisl ipsum fermentum libero, 
            sit amet malesuada nisi libero a sapien. Proin vel lectus at arcu fringilla interdum. 
            Fusce tempus elit eu tincidunt sollicitudin. Cras euismod, lectus sit amet eleifend malesuada, 
            sapien libero egestas enim, eget fermentum mauris ipsum vel lorem. Vivamus luctus, sapien eu 
            congue gravida, felis tortor vehicula ex, sed iaculis augue ligula nec felis. 
            Integer non mauris sed magna iaculis dapibus ut sed risus. 
            Donec ut risus id elit faucibus ullamcorper ac nec enim.
            </p>
          <div className="mt-5 flex flex-col xl:flex=row items-center gap-8">
          <Button>
            Download Resume
            <FiDownload/>
          </Button>
          <Socials/>
          </div>

          </div>


        <div className="mt-12 order-1 xl:order-none mb-8 xl:mb-0">
          <Photo/>
        </div>
      </div>

      </div>

    </div>
  </section>
  );
}
