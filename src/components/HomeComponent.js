"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import WrapperComponent from "./WrapperComponent";

export default function HomeComponent() {
  return (
    <WrapperComponent>
      <div className="w-full flex flex-col gap-8 z-40">
        <div className="text-center py-3 flex justify-center rounded-md dark:bg-zinc-800 bg-white dark:text-white text-gray-800">
          <p>Hello, indie developer from Türkiye!</p>
        </div>
      </div>
      <div className="w-full flex items-center justify-between z-40">
        <div className="flex flex-col">
          <h3 className="text-3xl font-medium">Ege Yapici</h3>
          <p>Solo Dev ( Developer / Designer / Entrepreneur )</p>
        </div>
        <Image
          width={84}
          height={84}
          alt="profile"
          src={"/profile.jpeg"}
          className="rounded-full border dark:border-gray-800 border-white"
        />
      </div>
      <div className="flex flex-col gap-5">
        <h3
          className="text-xl font-medium underline"
          style={{
            lineHeight: 1.2,
            textUnderlineOffset: 6,
            textDecorationThickness: 4,
          }}
        >
          Work
        </h3>
        <p>
          Ege is a passionate full-stack developer based in Istanbul, dedicated
          to creating efficient and scalable digital solutions. With a strong
          focus on problem-solving and attention to detail, he enjoys working on
          diverse projects that challenge his skills and foster continuous
          learning. Outside of development, Ege appreciates exploring new
          technologies and staying updated with the latest trends in software
          engineering.
        </p>
        <div className="w-full flex justify-center items-center">
          <Link
            href={"/"}
            className="text-white dark:text-gray-800 flex items-center gap-3 p-2 px-3 bg-teal-600 hover:bg-teal-700 rounded-md transition-all"
          >
            <p>My portfolio</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 6l6 6l-6 6" />
            </svg>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h3
          className="text-xl font-medium underline"
          style={{
            lineHeight: 1.2,
            textUnderlineOffset: 6,
            textDecorationThickness: 4,
          }}
        >
          Bio
        </h3>
        <div className="flex flex-col">
          <div className="flex gap-2 items-start">
            <p className="font-bold">2006</p>
            <p>Born in Istanbul, Türkiye</p>
          </div>
          <div className="flex gap-2 items-start">
            <p className="font-bold">2016</p>
            <p>
              Wrote my first line of code — it printed “Hello World”, but I felt
              like I hacked NASA.
            </p>
          </div>
          <div className="flex gap-2 items-start">
            <p className="font-bold">2021</p>
            <p>
              Started freelancing — finally got paid for Googling stuff really
              fast.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <h3
          className="text-xl font-medium underline"
          style={{
            lineHeight: 1.2,
            textUnderlineOffset: 6,
            textDecorationThickness: 4,
          }}
        >
          Hobbies
        </h3>
        <p>
          Making playlists I never finish, watching films like I’m a critic,
          arguing with AI, sketching weird ideas, taking photos of coffee, and
          yes — writing code just for fun (and bugs).
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <h3
          className="text-xl font-medium underline"
          style={{
            lineHeight: 1.2,
            textUnderlineOffset: 6,
            textDecorationThickness: 4,
          }}
        >
          Digital Footprint
        </h3>
        <div className="flex flex-col">
          <Link
            href={"https://github.com/yapiciege45"}
            target="_blank"
            className="inline-flex w-fit items-center gap-2 px-3 py-2 hover:bg-teal-100 transition-all rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github stroke-teal-600"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
            <p className="text-teal-600">@yapiciege45</p>
          </Link>
          <Link
            href={"https://www.instagram.com/egeyapicii/"}
            target="_blank"
            className="inline-flex w-fit items-center gap-2 px-3 py-2 hover:bg-teal-100 transition-all rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram stroke-teal-600"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
              <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
              <path d="M16.5 7.5v.01" />
            </svg>
            <p className="text-teal-600">@egeyapicii</p>
          </Link>
          <Link
            href={"https://www.linkedin.com/in/ege-yapici/"}
            target="_blank"
            className="inline-flex w-fit items-center gap-2 px-3 py-2 hover:bg-teal-100 transition-all rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin stroke-teal-600"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 11v5" />
              <path d="M8 8v.01" />
              <path d="M12 16v-5" />
              <path d="M16 16v-3a2 2 0 1 0 -4 0" />
              <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
            </svg>
            <p className="text-teal-600">@egeyapici</p>
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <h3
          className="text-xl font-medium underline"
          style={{
            lineHeight: 1.2,
            textUnderlineOffset: 6,
            textDecorationThickness: 4,
          }}
        >
          Contact
        </h3>
        <p>
          Got a project, question, or meme to share? My inbox is always open — I
          reply faster than my code compiles.
        </p>
        <div className="w-full flex justify-center items-center">
          <Link
            href="mailto:yapiciege45@gmail.com"
            className="text-white dark:text-gray-800 flex items-center gap-3 p-2 px-3 bg-teal-600 hover:bg-teal-700 rounded-md transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="icon icon-tabler icons-tabler-filled icon-tabler-mail"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" />
              <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" />
            </svg>
            <p>Say Hello</p>
          </Link>
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
