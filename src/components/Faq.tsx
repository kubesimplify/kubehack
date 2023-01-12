import SectionWrapper from "@components/ui/SectionWrapper";
import Heading from "@components/ui/Heading";
import MyDisclosure from "@lib/Disclosure";
import { faq } from "@data/index";

const Sponser = () => {
  return (
    <SectionWrapper id="faq" className="mb-12">
      <Heading>FAQ</Heading>
      <div className="grid sm:grid-cols-2 gap-x-5 w-full px-10">
        {faq.map(el=>(
          <MyDisclosure key={el.id} {...el} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Sponser;
