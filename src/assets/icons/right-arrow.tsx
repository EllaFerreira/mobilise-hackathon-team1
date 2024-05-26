import { IconBaseProps } from "@/types/types";

interface Props extends IconBaseProps {}

function RightArrow({ className, onClick }: Props) {
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
        width="31"
        height="31"
        viewBox="0 0 31 31"
        fill="none"
      >
        <path
          d="M15.4303 28.4341C22.4088 28.4341 28.0659 22.7769 28.0659 15.7984C28.0659 8.81996 22.4088 3.16278 15.4303 3.16278C8.45179 3.16278 2.79462 8.81996 2.79462 15.7984C2.79462 22.7769 8.45179 28.4341 15.4303 28.4341Z"
          stroke="white"
          strokeWidth="2.52713"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.4303 20.8527L20.4846 15.7984L15.4303 10.7442"
          stroke="white"
          strokeWidth="2.52713"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.376 15.7984H20.4846"
          stroke="white"
          strokeWidth="2.52713"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default RightArrow;
