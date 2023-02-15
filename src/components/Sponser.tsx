import SectionWrapper from "@components/ui/SectionWrapper";
import Heading from "@components/ui/Heading";
import hackathon from "@data/index";
import Image from "next/image";

const Sponser = () => {
  return (
    <SectionWrapper id="sponsers">
      <Heading>Sponsers</Heading>
      <div className="flex flex-wrap gap-5 items-center justify-center">
        {hackathon.sponsers.map((sponser) => (
          <div
            key={sponser.id}
            className={`flex items-center justify-center w-32 h-14 sm:w-52 sm:h-24 rounded-3xl bg-light-background/10 hover:border-2 hover:bg-light-background/20 ${
              hackathon?.blur?.sponsers && "blur-md"
            }`}
          >
            {sponser.sponserLogo ? (
              <Image
                src={sponser.sponserLogo}
                className=""
                alt="sponser logo"
                width={148}
                height={40}
              />
            ) : (
              "Coming Soon..."
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Sponser;
