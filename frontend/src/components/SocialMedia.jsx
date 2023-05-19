import React from "react";
import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://www.linkedin.com/in/riccardo-boe-833a53245/"
        rel="noreferrer"
        target="_blank"
      >
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a
        href="https://twitter.com/riccardoboe1"
        rel="noreferrer"
        target="_blank"
      >
        <BsTwitter />
      </a>
    </div>
    <div>
      <a
        href="https://github.com/riccardoboe/"
        rel="noreferrer"
        target="_blank"
      >
        <BsGithub />
      </a>
    </div>
  </div>
);

export default SocialMedia;
