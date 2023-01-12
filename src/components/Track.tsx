import { tracks } from "@data/index";
import Heading from "./ui/Heading";
import SectionWrapper from "./ui/SectionWrapper";

const Track = () => {
  return (
    <SectionWrapper id="track">
      <Heading>Tracks</Heading>
      <div className="flex flex-wrap gap-5 justify-center">
        {tracks.map((track) => (
          <TrackBlob key={track.id} {...track} />
        ))}
      </div>
    </SectionWrapper>
  );
};

const TrackBlob = ({
  name,
  backgroundImg,
}: {
  name: string;
  backgroundImg: string;
}) => (
  <div className="relative group w-32 h-24 sm:w-48 sm:h-40 blob border-2 overflow-hidden">
    <div
      className="w-48 h-40 bg-center bg-contain overflow-hidden opacity-40"
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    ></div>
    <p className=" absolute top-0 left-0 w-full h-full blob bg-light-background/5 group-hover:bg-cyan/20">
      <span className="flex items-center justify-center sm:text-3xl h-full font-bold">
        {name}
      </span>
    </p>
  </div>
);

export default Track;
