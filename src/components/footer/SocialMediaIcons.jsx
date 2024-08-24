import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const socialIcon = [
  {
    id: 1,
    icon: <FaFacebookF />,
    url: "http://facebook.com/",
  },
  {
    id: 2,
    icon: <FaInstagram />,
    url: "http://instagram.com/",
  },
  {
    id: 3,
    icon: <FaTwitter />,
    url: "http://twitter.com/",
  },
  {
    id: 4,
    icon: <FaLinkedin />,
    url: "http://linkdin.com/",
  },
];

const SocialMediaIcons = () => {
  return (
    <div>
      <div className="socialIcons">
        {socialIcon.map((item) => {
          const { url, icon, id } = item;
          return (
            <a href={url} key={id} target="_blank" className="icon">
              {icon}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialMediaIcons;
