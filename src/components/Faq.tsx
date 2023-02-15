import SectionWrapper from "@components/ui/SectionWrapper";
import Heading from "@components/ui/Heading";
import MyDisclosure from "@lib/Disclosure";
import hackathon from "@data/index";

const Sponser = () => {
  return (
    <SectionWrapper id="faq" className="mb-12">
      <Heading>FAQ</Heading>
      <div className="flex flex-col flex-wrap gap-x-5 w-full px-10">
        {hackathon.faq
          ? hackathon.faq.map((el) => <MyDisclosure key={el.id} {...el} />)
          : null}
      </div>
    </SectionWrapper>
  );
};

export default Sponser;
