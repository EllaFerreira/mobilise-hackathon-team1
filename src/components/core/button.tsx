import RightArrow from "@/assets/icons/right-arrow";
import { ReactNode } from "react";

type ButtonProps = {
  onClick: () => void;
  text?: string;
  icon?: ReactNode;
  type?: "submit" | "button";
  isDisabled: boolean;
  className?: string;
};

function Button({
  text,
  onClick,
  type,
  isDisabled = false,
  className,
}: ButtonProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      className={`${isDisabled ? "disable-button" : "next-button"} ` + className}
      type={type ?? "button"}
      disabled={isDisabled}
    >
      <>
        {text}
        {<RightArrow />}
      </>
    </button>
  );
}
Button.defaultProps = { isDisabled: false };

export default Button;
