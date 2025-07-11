"use client";

import React from "react";
import dynamic from "next/dynamic";

const ModelCanvas = dynamic(() => import("./ModelCanvas"), {
  ssr: false,
});

export default function WrapperComponent({ children }) {
  return (
    <div className="w-full h-[90dvh] pt-10 dark:text-white text-gray-800">
      <div className="w-full flex justify-center">
        <div className="w-10/12 lg:w-1/2 xl:w-1/3 max-w-[554px] flex flex-col gap-10">
          <ModelCanvas />
        </div>
      </div>

      <div className="w-full flex justify-center -mt-24 z-40">
        <div className="w-10/12 lg:w-1/2 xl:w-1/3 max-w-[554px] flex flex-col gap-10 z-40">
          {children}
        </div>
      </div>
    </div>
  );
}
