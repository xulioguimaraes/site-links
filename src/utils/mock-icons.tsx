import { SocialProps } from "@/types/SocialProps";
import {
  BsInstagram,
  BsLinkedin,
  BsWhatsapp,
  BsDiscord,
  BsTwitter,
  BsTwitch,
} from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";

export const social: SocialProps[] = [
  {
    name: "linkedin",
    lable: "LinkedIn",
    color: "#0077B5",
    icon: <BsLinkedin fontSize="30px" />,
  },
  {
    name: "facebook",
    lable: "Facebook",
    color: "#1877F2",
    icon: <ImFacebook2 fontSize="30px" />,
  },
  {
    name: "instagram",
    lable: "Instagram",
    color: "#8a3ab9",
    icon: <BsInstagram fontSize="30px" />,
  },
  {
    name: "discord",
    lable: "Discord",
    color: "#7289DA",
    icon: <BsDiscord fontSize="30px" />,
  },
  {
    name: "whatsapp",
    lable: "WhatsApp",
    color: "#25D366",
    icon: <BsWhatsapp fontSize="30px" />,
  },
  {
    name: "twitch",
    lable: "Twitch",
    color: "#6441A5",
    icon: <BsTwitch fontSize="30px" />,
  },
  {
    name: "twitter",
    lable: "Twitter",
    color: "#1DA1F2",
    icon: <BsTwitter fontSize="30px" />,
  },
];
