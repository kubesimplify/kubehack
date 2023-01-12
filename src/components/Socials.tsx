import {
  DiscordIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@assets/icon";

interface SocialProps {
  twitter?: string;
  linkedin?: string;
  instagram?: string;
  discord?: string;
}

const Socials = ({ instagram, linkedin, twitter, discord }: SocialProps) => {
  return (
    <div className="flex gap-2">
      {twitter ? <Link link={twitter} icon={TwitterIcon} /> : null}
      {linkedin ? <Link link={linkedin} icon={LinkedinIcon} /> : null}
      {instagram ? <Link link={instagram} icon={InstagramIcon} /> : null}
      {discord ? <Link link={discord} icon={DiscordIcon} /> : null}
    </div>
  );
};

export default Socials;

const Link = ({ link, icon }: { link: string; icon: ()=>JSX.Element }) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer"
    className="bg-light-background/20 rounded-lg p-2 cursor-pointer"
  >
    {icon()}
  </a>
);
