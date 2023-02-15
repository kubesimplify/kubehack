import SectionWrapper from "@components/ui/SectionWrapper";
import Heading from "@components/ui/Heading";
import hackathon from "@data/index";
import Image from "next/image";

const Sponsor = () => {
  return (
    <SectionWrapper id="sponsors">
      <Heading>Sponsors</Heading>
      <div className="flex flex-wrap gap-5 items-center justify-center">
        {hackathon.sponsors.map((sponsor) => (
          <div
            key={sponsor.id}
            className={`flex items-center justify-center w-32 h-14 sm:w-52 sm:h-24 rounded-3xl bg-light-background/10 hover:border-2 hover:bg-light-background/20 ${
              hackathon?.blur?.sponsors && "blur-md"
            }`}
          >
            {sponsor.sponsorLogo ? (
              <Image
                src={sponsor.sponsorLogo}
                className=""
                alt="sponsor logo"
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

export default Sponsor;
