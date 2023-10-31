export interface SocialProps {
  name:
    | "linkedin"
    | "facebook"
    | "instagram"
    | "discord"
    | "whatsapp"
    | "twitch"
    | "twitter";

  icon: ReactNode;
  lable: string;
  color: string;
}
