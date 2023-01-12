import { AboutIcon, CalenderLogo, Location } from "@assets/icon";
import Heading from "./ui/Heading";
import SectionWrapper from "./ui/SectionWrapper";

const About = () => {
  return (
    <SectionWrapper id="about" className="mx-3">
      <div className="flex items-center bg-light-background/5 w-full rounded-3xl mx-10">
        <div className="hidden md:inline w-1/2 p-10">
          <AboutIcon />
        </div>
        <div className="flex flex-col gap-5 md:w-1/2 p-10">
          <Heading>About us</Heading>
          <p className="text-lg font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            iusto aperiam eligendi nisi ut repellat totam accusantium explicabo
            voluptates, saepe cupiditate similique sed eum ratione quisquam
            optio vero doloremque corporis laudantium fuga, inventore aliquid
            architecto consequatur! Sit dolore ullam perspiciatis quidem
            possimus, sapiente sed recusandae consequuntur adipisci dolor
            numquam ratione.
          </p>
          <div className="flex flex-col sm:flex-row items-start  gap-5 text-lg font-bold">
            <span className="p-2 bg-light-background/10 rounded-lg flex items-center gap-2 whitespace-nowrap"><Location/> Delhi NCR</span>
            <span className="p-2 bg-light-background/10 rounded-lg flex items-center gap-2 whitespace-nowrap">
              <CalenderLogo /> March 25 - 26, 2023
            </span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
