import { ArrowTopRight, DiscordIcon, HeroSvg } from "@assets/icon";
import SectionWrapper from "./ui/SectionWrapper";
import Button from "./ui/Button";
import { socials } from "@data/index";

const Hero = () => {
  return (
    <SectionWrapper id="hero">
      <div className="flex items-center w-full justify-center gap-5 mx-auto">
        <div className="sm:w-3/5 flex flex-col gap-5 pl-5">
          <h1 className="text-5xl font-bold">
            <span className="text-cyan">KubeHack</span> is India&#39;s first{" "}
            <br /> Cloud native <span className="text-cyan">hackathon</span>
          </h1>
          <p className="text-lg" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>Ratione,
            eveniet!
          </p>
          <div className="flex gap-3 items-center font-bold">
            <Button>
              <ArrowTopRight /> Pre-Register
            </Button>
            <Button href={socials.discord}>
              <DiscordIcon /> Join Discord
            </Button>
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
