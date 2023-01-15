import { ArrowTopRight } from "@assets/icon";
import Logo from "@assets/Logo";
import Button from "@components/ui/Button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-30 w-full bg-sky-900  h-20 flex items-center tracking-wider">
      <div className="flex items-center justify-between mx-4 md:justify-around md:mx-auto w-full font-bold max-w-6xl">
        <Logo />
        <div className="hidden lg:flex gap-5">
          {nav.map((el) => (
            <a
              className="cursor-pointer hover:text-cyan text-lg"
              href={el.href}
              key={el.id}
            >
              {el.name}
            </a>
          ))}
        </div>
        <div>
          <Button> <ArrowTopRight /> Pre-Register</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const nav = [
  { id: 1, name: "About", href: "#about" },
  { id: 2, name: "Track", href: "#track" },
  { id: 3, name: "Prizes", href: "#prizes" },
  { id: 4, name: "Speakers", href: "#speakers" },
  { id: 5, name: "Sponsers", href: "#sponsers" },
  { id: 6, name: "FAQ", href: "#faq" },
];
