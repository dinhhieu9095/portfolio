import PageTransition from "@/components/PageTransition";
import { Photo } from "@/components/Photo";
import Social from "@/components/Social";
import { Stats } from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi"
import Resume from "./resume/page";
import Reviews from "./reviews/page";
export default function Home () {
  return (
          
    <PageTransition>
    <section className="h-full bg-even prefade">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h2 className="h2 prefade">.NET Developer</h2>
            <h1 className="h1 mb-6 prefade">
              <span className="text-accent">Hieu Nguyen Dinh</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-black/80 prefade">
              After all... I&apos;m just a .NET developer, looking for a company, and asking them to hire me.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant={"ouline"} size={"lg"} className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 rounded-full flex justify-center items-center text-primary text-base bg-accent hover:bg-accent-hover hover:transition-all duration-500" />
              </div>
            </div>

          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0 pt-5">
            <Photo />
          </div>
        </div>
      </div>
    </section>
    <Stats />
    <Resume />
    <Reviews />
    </PageTransition>
  );
}
