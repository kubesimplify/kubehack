import { Trophy } from "@assets/icon";
import Heading from "@components/ui/Heading";
import SectionWrapper from "@components/ui/SectionWrapper";
import hackathon from "@data/index";

const Prizes = () => {
  return (
    <SectionWrapper id="prizes">
      <Heading>Prizes</Heading>
      <div className="flex flex-wrap gap-5 items-center justify-center">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((el) => (
          <PrizesCard key={el} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Prizes;

function PrizesCard() {
  return (
    <div
      className={`group relative flex flex-col gap-2 items-center justify-center bg-light-background/10 p-3 rounded-3xl w-[265px] h-40 hover:border-2  ease-out overflow-hidden ${
        hackathon.blur.prizes ? "blur-md" : "hover:bg-light-background/20"
      }`}
    >
      <div
        className={`flex flex-col justify-center items-center gap-2 ${
          !hackathon.blur.prizes && "group-hover:hidden"
        }`}
      >
        <Trophy />
        <p className="text-xl font-bold">Winner Team</p>
      </div>
      {!hackathon.blur.prizes && (
        <p className=" absolute -bottom-28 group-hover:bottom-6 font-bold text-center text-xl transition-all duration-300">
          Rs. 50,000 <br /> MacBook Pro <br /> Apple Airpods <br /> Another
          prizes
        </p>
      )}
    </div>
  );
}
