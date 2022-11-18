import React from "react";
import SocialMediaCard from "./SocialMediaCard";

const social = [
  {
    src: "./src/assets/iconsHome/twitter.png",
    href: "twitter.com",
    alt: "logo Twitter",
  },
  {
    src: "./src/assets/iconsHome/youtube.png",
    href: "youtube.com",
    alt: "logo Youtube",
  },
  {
    src: "./src/assets/iconsHome/facebook.png",
    href: "facebook.com",
    alt: "logo Facebook",
  },
  {
    src: "./src/assets/iconsHome/instagram.png",
    href: "instagram.com",
    alt: "logo Instagram",
  },
];

export default function SocialMedia() {
  return (
    <div className="socialMedia d-flex mx-auto justify-content-between">
      {social.map((socialInfo) => (
        <SocialMediaCard socialInfo={socialInfo} />
      ))}
    </div>
  );
}
