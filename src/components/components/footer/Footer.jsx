import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";


const Footer = () => {
  const getYear = () => {
    const currentDate = new Date();
    return currentDate.getFullYear();
  };

  const currentYear = getYear()
  return (
    <footer className="footer footer-center p-10 pt-0 rounded">
      {/* <div className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div> */}
      <div>
        <div className="grid grid-flow-col gap-4">
          <a className="hover:text-blue-500" target="_blank" rel="noopener noreferrer" href={"https://www.linkedin.com/in/eli-rosenfeld"}>
            <BsLinkedin className=" text-xl" />
          </a>
          <a className="hover:text-blue-500" target="_blank" rel="noopener noreferrer" href={"https://github.com/Rosenfeld99"}>
            <BsGithub className=" text-2xl" />
          </a>
          <a className="hover:text-blue-500" target="_blank" rel="noopener noreferrer" href={"https://eli-rosenfeld-protfolio.netlify.app/"}>
            <FaUserCircle className=" text-2xl" />
          </a>
        </div>
      </div>
      <div>
        <p>Copyright © {currentYear} - <a className="link link-hover hover:text-blue-500" target="_blank" rel="noopener noreferrer" href={"https://eli-rosenfeld-protfolio.netlify.app/"}> Eli Rosenfeld </a></p>
        {/* <p>Fullstack Developer | MongoDB | Node.js</p> */}
      </div>
    </footer>
  );
};

export default Footer;
