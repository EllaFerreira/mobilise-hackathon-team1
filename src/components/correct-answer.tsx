"use client";

import React from "react";
import Button from "./core/button";
import Select from "./core/select";
import HomelessnessWithBag from "@/assets/icons/homelessness-with-bag";

interface CorrectAnswerProps {
  answer: string;
  explanationText: string;
  sourceText: string;
  sourceUrl: string;
  onClickNext: () => void;
}

const CorrectAnswer: React.FC<CorrectAnswerProps> = ({
  answer,
  explanationText,
  sourceText,
  sourceUrl,
  onClickNext,
}) => {
  return (
    <div className="h-[100vh] flex flex-col items-center overflow-auto hide-scroll grow">
      <h1 className="text-2xl font-bold mb-4">Correct Answer:</h1>

      <div className="bg-green-100 text-black font-bold p-14 rounded-md w-48 mb-4">
        <p className="text-xl">{answer}</p>
      </div>

      {/* <HomelessnessWithBag /> */}
      <p className="text-lg font-bold mt-4 mb-2 text-blue-100 text-left mb-8">
        {explanationText}
      </p>

      <small className="text-black-100">
        {sourceText} (2021): Census of Population and Housing: Estimating
        homelessness, 2021{" "}
        <a href={sourceUrl} className="underline text-blue-500">
          Source
        </a>
      </small>
      <div className="w-full flex justify-end mt-4">
        <Button
          onClick={onClickNext}
          text="Next"
          className="w-[120px] items-center justify-center"
        />
      </div>
    </div>
  );
};

export default CorrectAnswer;
