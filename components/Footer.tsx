import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer
      className="w-full pb-10 mb-[100px] md:mb-5 overflow-hidden"
      id="contact"
    >
      <div className=" w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="Footer"
          className="w-full h-full opacity-50"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>

        <a href="mailto:rashmimaniampare@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p>copyright ©2024 Rashmi</p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((media) => (
            <div
              key={media.id}
              className="flex size-10 justify-center rounded-lg border border-black-300 cursor-pointer items-center backdrop-filter backdrop-blur-lg saturate-100 bg-opacity-75 bg-black-200"
            >
              <a href={media.link}>
                <img src={media.img} alt="media icon" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
