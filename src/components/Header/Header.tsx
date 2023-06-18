import { IMAGES } from "@/Constants/Images";
import Image from "next/image";
import React from "react";
import { FiGithub, FiTwitter, FiMoon } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { SlSocialBehance } from "react-icons/sl";

export default function Header() {
  return (
    <nav className="header-layout page-vertical-space page-horizontal-space">
      <div className="w-full flex justify-between items-center">
        <Image
          src={"/signature.png"}
          width={100}
          height={100}
          className="invert"
          alt="munyyb signature"
        />
        {/* <h1>Munyyb</h1> */}
        <div className="flex justify-center items-center">
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/munyyb/"
            target="_blank"
          >
            <div className="hoverable-links">
              <AiOutlineLinkedin size={24} />
            </div>
          </a>
          <a
            className="twitter"
            href="https://twitter.com/HM_MUNEEB"
            target="_blank"
          >
            <div className="hoverable-links">
              <FiTwitter size={20} />
            </div>
          </a>
          <a
            className="github"
            href="https://github.com/MUNYYBY/"
            target="_blank"
          >
            <div className="hoverable-links">
              <FiGithub size={20} />
            </div>
          </a>
          <a className="dark-light-toggle">
            <div className="hoverable-links">
              <FiMoon size={22} />
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
}
