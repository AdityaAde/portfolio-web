import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import WhatsappIcon from "../../../public/whatsapp-icon.svg";
import InstagramIcon from "../../../public/instagram-icon.svg";
import Link from "next/link";
import Image from "next/image";

const SosmedSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-16 py-24 gap-4 relative">
      <div className="absolute w-80 h-80 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full blur-lg top-full -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <a
            href="https://github.com/AdityaAde"
            target="_blank"
            rel="noopener noreferrer">
            <Image src={GithubIcon} />
          </a>
          <a
            href="https://linkedin.com/in/adityaade"
            target="_blank"
            rel="noopener noreferrer">
            <Image src={LinkedinIcon} />
          </a>
          <a
            href="https://instagram.com/adityad49_/"
            target="_blank"
            rel="noopener noreferrer">
            <Image src={InstagramIcon} />
          </a>
          <a
            href="https://wa.me/62895361427482"
            target="_blank"
            rel="noopener noreferrer">
            <Image src={WhatsappIcon} />
          </a>
        </div>
      </div>
      <div>
        <Image src="/images/person-space.png" height={1000} width={800} />
      </div>
    </section>
  );
};

export default SosmedSection;
