import React from "react";
import { Link } from "react-router-dom";
import { GoMarkGithub } from "react-icons/go";
import { AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="footerHalf">
        <a href="https://github.com/2006-GHP-NY-Raikou/rat_shopper">
          <GoMarkGithub color="##e36397" size={32} /> GitHub
        </a>
      </div>
      <div className="footerHalf">
        <a href="https://www.linkedin.com/in/emma-seely-katz-b4386a1a3/">
          <AiOutlineLinkedin size={25} /> Emma Seely-Katz
        </a>
      </div>
    </footer>
  );
};

export default Footer;
