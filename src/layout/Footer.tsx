import Logo from "@assets/Logo";
import Socials from "@components/Socials";
import hackathon from "@data/index";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="min-h-[96px] bg-light-background/10 flex items-center tracking-wider">
      <div className="flex flex-col items-center gap-2 my-3 md:flex-row md:items-center md:justify-around justify-start w-full font-bold max-w-6xl  mx-auto">
        <Link href="/">
          <Logo />
        </Link>
        {hackathon?.email ? <span>{hackathon.email}</span> : null}
        {hackathon?.socials ? <Socials {...hackathon.socials} /> : null}
      </div>
    </footer>
  );
};

export default Footer;
