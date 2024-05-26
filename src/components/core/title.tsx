"use client";
import MobiliseStar from "@/assets/icons/mobilise-star";
import React from "react";

interface TitleProps {
  text: string;
}

function Title({ text }:TitleProps) {
  return (
    <div className="flex items-center">
      <div className="relative w-6 h-12">
        <MobiliseStar className='absolute top-0 left-0 w-full h-full fill-green-100' />
      </div>
      <div className="bg-blue-100 rounded-md ml-4 z-10">
        <p className="text-white-base font-bold px-8 py-4">{text}</p>
      </div>
    </div>
  );
};

export default Title;