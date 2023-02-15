import { AboutIcon, CalenderLogo, Location } from "@assets/icon";
import Heading from "./ui/Heading";
import SectionWrapper from "./ui/SectionWrapper";
import hackathon from "@data/index";

const About = () => {
  return (
    <SectionWrapper id="about" className="mx-3">
      <div className="flex items-center bg-light-background/5 w-full rounded-3xl mx-10">
        <div className="hidden md:inline w-1/2 p-10">
          <AboutIcon />
        </div>
        <div className="flex flex-col gap-5 md:w-1/2 p-10">
          <Heading>About us</Heading>
          <p className="text-lg font-semibold">{hackathon.aboutUs}</p>
          <div className="flex flex-col sm:flex-row items-start  gap-5 text-lg font-bold">
            {hackathon.location ? (
              <span className="p-2 bg-light-background/10 rounded-lg flex items-center gap-2 whitespace-nowrap">
                <Location />
                {hackathon.location}
              </span>
            ) : null}
            {hackathon.date ? (
              <span className="p-2 bg-light-background/10 rounded-lg flex items-center gap-2 whitespace-nowrap">
                <CalenderLogo /> {hackathon.date}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
