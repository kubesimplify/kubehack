import { speakers } from "@data/index";
import Heading from "./ui/Heading";
import SectionWrapper from "./ui/SectionWrapper";
import Socials from "./Socials";
import Image from "next/image";

const Speakers = () => {
  return (
    <SectionWrapper id="speakers">
      <Heading>Speakers</Heading>
      <div className="flex flex-wrap gap-5 justify-center">
        {speakers.map((speaker) => (
          <SpeakerCard key={speaker.id} {...speaker} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Speakers;

interface SpeakerCardProps {
  name: string;
  imageUrl: string;
  socials: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

const SpeakerCard = ({ name, imageUrl, socials }: SpeakerCardProps) => (
  <div className="group relative p-2 bg-light-background/10 rounded-3xl overflow-hidden">
    <div className="flex flex-col gap-1 sm:gap-3 items-center justify-center p-1">
      <div className="relative w-[111px] h-[127px] sm:w-[148px] sm:h-[170px] ">
        <Image
          src={imageUrl}
          alt="image"
          className="rounded-[20px]"
          fill={true}
        />
      </div>
      <p className="sm:text-xl text-sm font-semibold sm:font-bold">{name}</p>
    </div>
    <div className="hidden absolute top-0 left-0 group-hover:flex flex-col items-center border-2 justify-center gap-3 w-full h-full bg-indigo-900/90 rounded-3xl">
      <p className="sm:text-xl font-bold">{name}</p>
      <Socials {...socials} />
    </div>
  </div>
);
