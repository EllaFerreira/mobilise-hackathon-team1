interface QuizButtonProps {
  value: string;
  onClick: () => void;
  selected: boolean;
  id: string;
}

function QuizButton({ id, value, onClick, selected }: QuizButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-yellow-100 hover:bg-yellow-100 text-black font-bold py-4 px-6 rounded-md w-full ${
        selected ? "bg-green-100" : ""
      }`}
    >
      {value}
    </button>
  );
}

export default QuizButton;