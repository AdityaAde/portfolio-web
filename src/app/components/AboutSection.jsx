"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Flutter</li>
        <li>Dart</li>
        <li>Firebase</li>
        <li>Next JS</li>
        <li>TypeScript</li>
        <li>Nest JS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>SMK Tunas Wisata</li>
        <li>Gunadarma University</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Laboratory Assitant Multimedia and Robotics</li>
        <li>PT.Erdikha Elit Sekuritas</li>
        <li>PT.Tri Digital Perkasa</li>
        <li>PT.Komunitas Karya Transformasi</li>
        <li>PT.Bagubagu Teknologi Indonesia</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="md:grid md:grid-cols-2 gap-8 sm:py-16 ">
        <Image src="/images/tourist-person.png" height={700} width={500} />
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I&apos;m Flutter Developer with 3 years of experience developing iOS
            and Android applications using Flutter. I have a strong passion for
            mobile development. I am a team player and I am excited to work with
            others to create amazing applications. Always keen to learn new
            skills and improve my code to more developing on mobile apps.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}>
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}>
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}>
              Work Experience
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
