import React from "react";
import { Link } from "react-router-dom";
import { GoMarkGithub } from "react-icons/go";
import { AiOutlineLinkedin } from "react-icons/ai";

const About = () => {
  return (
    <div>
      <div>
        <h2>About</h2>
        <a href="https://www.linkedin.com/in/deanna-dunne/">
          <AiOutlineLinkedin size={25} /> Deanna Dunne
        </a>
        <a href="https://www.linkedin.com/in/emma-seely-katz-b4386a1a3/">
          <AiOutlineLinkedin size={25} /> Emma Seely-Katz
        </a>
        <a>
          <GoMarkGithub color="##e36397" size={32} /> GitHub
        </a>
      </div>
      <div>
        <h2>Contanct Us</h2>
      </div>
    </div>
  );
};

export default About;
