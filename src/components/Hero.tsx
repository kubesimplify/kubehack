import { ArrowTopRight, DiscordIcon, HeroSvg } from "@assets/icon";
import SectionWrapper from "./ui/SectionWrapper";
import Button from "./ui/Button";
import hackathon from "@data/index";

const Hero = () => {
  return (
    <SectionWrapper id="hero">
      <div className="flex items-center w-full justify-center gap-5 mx-auto mt-14">
        <div className="sm:w-3/5 flex flex-col gap-5 pl-5">
          <h1 className="text-5xl font-bold">
            <span className="text-cyan">KubeHack</span> is India&#39;s first{" "}
            <br /> <span className="text-cyan">In-Person</span> Cloud native{" "}
            <span className="text-cyan">hackathon</span>
          </h1>
          <p className="text-lg">
            Join us and be a part of the cloud native revolution!
          </p>
          <div className="flex gap-3 items-center font-bold">
            <Button>
              <ArrowTopRight /> Coming Soon...
            </Button>
            {hackathon?.socials?.discord ? (
              <Button href={hackathon?.socials?.discord}>
                {DiscordIcon} Join Discord
              </Button>
            ) : null}
          </div>
        </div>
        <div className="hidden sm:inline w-2/5 py-10 pr-10">
          <HeroSvg />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Hero;
