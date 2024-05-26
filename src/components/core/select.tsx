import React, { useState } from "react";

type SelectProps = {
  options: string[];
  correctAnswer: string;
  onAnswer: (selectedAnswer: string, isCorrect: boolean) => void;
};

const Select: React.FC<SelectProps> = ({
  options,
  correctAnswer,
  onAnswer,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    const isCorrect = option === correctAnswer;
    setIsAnswered(true);
    onAnswer(option, isCorrect);
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      {options.map((option, index) => {
        let bgColor = "bg-yellow-100";
        if (isAnswered && option === selectedOption) {
          if (option === correctAnswer) {
            bgColor = "bg-green-100";
          } else {
            bgColor = "bg-red-100";
          }
        }

        return (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            className={`${bgColor} p-12 rounded-md text-black flex items-center justify-center`}
          >
            <div className="flex-grow">
              <p className="text-center">{option}</p>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default Select;
