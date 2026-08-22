import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/eyelamp01/",
    icon: <FaInstagram />,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/918081971058",
    icon: <FaWhatsapp />,
  },
  {
    label: "WhatsApp Channel",
    href: "https://whatsapp.com/channel/0029Vb84QZUChq6GZXKcNz2G",
    icon: <HiOutlineSpeakerphone />,
  },
];

function SocialIcons({ className = "" }) {
  return (
    <div className={`d-flex gap-2 ${className}`}>
      {SOCIALS.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label={s.label}
          title={s.label}
        >
          {s.icon}
        </a>
      ))}
    </div>
  );
}

export default SocialIcons;
