import { FaInstagram, FaYoutube, FaDiscord, FaPodcast, FaSoundcloud, FaHandPeace } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Icons: {
  [key: string]: JSX.Element;
} = {
  youtube: (
    <FaYoutube />
  ),
  discord: (
    <FaDiscord />
  ),
  twitter: (
    <FaXTwitter />
  ),
  instagram: (
    <FaInstagram />
  ),
  fokus: (
    <span>💠</span>
  ),
  podcast: (
    <FaPodcast />
  ),
  musik: (
    <FaSoundcloud />
  ),
  speaker: (
    <FaHandPeace />
  ),
};

const Icon = ({ type, color = "#fff" }: { type: string; color?: string }) => {
  return (
    <div
      style={{
        backgroundColor: color,
      }}
      className={`w-10 h-10 flex items-center justify-center rounded-lg shadow-grid shrink-0`}
    >
      {Icons[type]}
    </div>
  );
};

export default Icon;
