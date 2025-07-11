"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import WrapperComponent from "./WrapperComponent";

const works = [
  {
    id: 1,
    title: "isbul.net",
    image: "/isbul.jpg",
    uri: "https://isbul.net",
    description: "Job search and recruitment platform.",
  },
  {
    id: 2,
    title: "StafStar",
    image: "/stafstar.jpg",
    uri: "https://stafstar.com",
    description: "Talent and workforce management tool.",
  },
  {
    id: 3,
    title: "EgeCV",
    image: "/egecv.jpg",
    uri: "https://egecv.com",
    description: "Smart CV builder and job-matching service.",
  },
  {
    id: 4,
    title: "Rezzy",
    image: "/rezzy.jpg",
    uri: "https://rezzyapp.com",
    description: "Simple appointment booking app with AI.",
  },
  {
    id: 5,
    title: "Gel Gidelim",
    image: "/gelgidelim.jpg",
    uri: "https://gelgidelim.com",
    description: "Local ride-sharing and travel platform.",
  },
  {
    id: 6,
    title: "Trustd",
    image: "/trustd.jpg",
    uri: "https://trustd.ai",
    description: "AI-based identity and fraud detection.",
  },
];

//

export default function WorksComponent() {
  return (
    <WrapperComponent>
      <div className="flex flex-col gap-5">
        <h3 className="text-xl font-medium">Works</h3>
        <div className="w-full flex items-center gap-5 justify-center flex-wrap">
          {works.map((work, index) => (
            <Link
              href={work.uri}
              target="_blank"
              className=" gap-2 flex flex-col w-[265px] h-[250px]"
              key={index}
            >
              <div
                className={`w-full h-[147px] rounded-xl relative overflow-hidden`}
              >
                <Image
                  src={work.image}
                  alt="Work image"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col items-center">
                <h4 className="text-xl font-medium text-center">
                  {work.title}
                </h4>
                <p className="text-center">{work.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="py-3 flex justify-center">
        <p className="opacity-40 text-sm">
          © 2025 Ege Yapici. All Rights Reserved.
        </p>
      </div>
    </WrapperComponent>
  );
}
