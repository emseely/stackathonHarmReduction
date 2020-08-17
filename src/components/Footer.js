import React from "react";
import { Link } from "react-router-dom";
import { GoMarkGithub } from "react-icons/go";
import { AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="footerHalf">
        <a href="https://github.com/emseely/stackathonNew">
          <GoMarkGithub color="##e36397" size={32} />
          <span> GitHub</span>
        </a>
        <div>
          Icons made by{" "}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </div>
      <div className="footerHalf" id="back">
        {/* <a href="https://www.linkedin.com/in/emma-seely-katz-b4386a1a3/">
          <AiOutlineLinkedin size={25} />
          <span> Emma Seely-Katz</span>
        </a> */}
        {/* <Link to="/">← Back</Link> */}
      </div>
    </footer>
  );
};

export default Footer;
