"use client";

import { useEffect, useState } from "react";
import Button from "../core/button";
import Title from "../core/title";
import Select from "../core/select";
import CorrectAnswer from "../correct-answer";
import { useFormik } from "formik";
import quiz from "@/data/quiz.json";
import { useRouter } from "next/navigation";

interface QuizOptionProps {
  value: string;
  selected: boolean;
  onClick: () => void;
}

interface QuestionData {
  id: string;
  qid: string;
  type: string;
  title: string;
  trackingData: {
    event: string;
    clickId: string;
  };
  trackingConfig: {
    errorMessage: string;
  };
  content: {
    type: string;
    options: string[];
  }[];
  correctAnswer: string;
  explanation: {
    text: string;
    source: {
      text: string;
      url: string;
    };
  };
}

const questions: QuestionData[] = (quiz.steps || []).map((step) => ({
  ...step,
}));

const defaultValues = questions.reduce((acc: any, question) => {
  acc[question.qid] = "";
  return acc;
}, {});

function QuizForm() {
  const router = useRouter();
  const { values, touched, errors, setFieldValue, handleSubmit } = useFormik({
    initialValues: defaultValues,
    onSubmit: () => {
      setIsCorrectAnswer(currentQuestion?.correctAnswer === selectedOption);
    },
  });

  const [selectedOption, setSelectedOption] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState<QuestionData | null>(
    null
  );
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleOptionClick = (selectedAnswer: string, isCorrect: boolean) => {
    setSelectedOption(selectedAnswer);
    if (currentQuestion) {
      setFieldValue(currentQuestion?.qid, selectedAnswer);
    }
  };

  const handleNextQuestion = () => {
    // Logic to move to the next question
    // For now, simply update the currentQuestion state
    const nextQuestionIndex = currentQuestionIndex + 1;
    setCurrentQuestionIndex(nextQuestionIndex);
    if (nextQuestionIndex >= questions.length) {
      // Reached the end of the quiz
      router.push("/result");
      return;
    }
    const nextQuestion = questions[nextQuestionIndex];
    setCurrentQuestion(nextQuestion);
    setSelectedOption(""); // Reset selected option
    setIsCorrectAnswer(false); // Reset correct answer state
  };

  // Load the first question
  useEffect(() => {
    setCurrentQuestion(questions[0]);
  }, []);

  return (
    <div className="h-[100vh] flex flex-col items-center overflow-auto hide-scroll grow p-8">
      <div className="flex flex-col gap-4 mt-4 w-full">
        {isCorrectAnswer && (
          <CorrectAnswer
            answer={currentQuestion?.correctAnswer || ""}
            explanationText={currentQuestion?.explanation.text || ""}
            sourceText={currentQuestion?.explanation.source.text || ""}
            sourceUrl={currentQuestion?.explanation.source.url || ""}
            onClickNext={() => handleNextQuestion()}
          />
        )}

        {!isCorrectAnswer && currentQuestion && (
          <>
            <Title text={currentQuestion.title} />

            {currentQuestion.content.map((content) => (
              <div
                key={content.options.join("")}
                className="flex flex-col gap-4 mt-4 w-full mb-4"
              >
                <Select
                  key={currentQuestion.id}
                  options={content.options}
                  onAnswer={handleOptionClick}
                  correctAnswer={currentQuestion.correctAnswer}
                />
              </div>
            ))}
          </>
        )}
      </div>

      <div className="w-full flex justify-end">
        <Button
          onClick={handleSubmit}
          text="Next"
          isDisabled={
            !(
              currentQuestion &&
              values[currentQuestion?.qid] === currentQuestion.correctAnswer
            )
          }
          className="w-[120px] items-center justify-center"
        />
      </div>
    </div>
  );
}

export default QuizForm;
