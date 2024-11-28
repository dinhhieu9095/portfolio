import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi"
export default function Home () {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <span className="text-xl">.NET Developer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br /> <span className="text-accent">Hieu Nguyen Dinh</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              After all... I&apos;m just a .NET developer, looking for a company, and asking them to hire me.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant={"ouline"} size={"lg"} className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social />
              </div>
            </div>

          </div>
          <div>photo</div>
        </div>
      </div>
    </section>
  );
}
