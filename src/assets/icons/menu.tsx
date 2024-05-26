import { IconBaseProps } from "@/types/types";

interface Props extends IconBaseProps {}

function Menu({ className, onClick }: Props) {
  return (
    <div
      className={
        `${
          onClick
            ? "cursor-pointer hover:scale-110 hover:rotate-3 transition-all duration-300 "
            : " "
        }` + className
      }
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="41"
        height="41"
        viewBox="0 0 41 41"
        fill="none"
      >
        <path
          d="M5.125 20.5H35.875"
          stroke="black"
          stroke-width="3.41667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.125 10.25H35.875"
          stroke="black"
          stroke-width="3.41667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.125 30.75H35.875"
          stroke="black"
          stroke-width="3.41667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}

export default Menu;
