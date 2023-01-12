import Logo from "@assets/Logo";
import Socials from "@components/Socials";
import { socials } from "@data/index";

const Footer = () => {
  return (
    <footer className="min-h-[96px] bg-light-background/10 flex items-center tracking-wider">
      <div className="flex flex-col items-center gap-2 my-3 md:flex-row md:items-center md:justify-around justify-start w-full font-bold max-w-6xl  mx-auto">
        <Logo />
        <span>contact&copy;kubehack.com</span>
        <Socials {...socials}/>
      </div>
    </footer>
  );
};

export default Footer;
