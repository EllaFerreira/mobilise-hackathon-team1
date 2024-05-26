import { IconBaseProps } from "@/types/types";

interface Props extends IconBaseProps {}

function MobiliseStar({ className, onClick }: Props) {
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
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="51"
        height="55"
        viewBox="0 0 51 55"
        fill="none"
      >
        <rect width="50.0407" height="54.9627" fill="url(#pattern0_6_93)" />
        <defs>
          <pattern
            id="pattern0_6_93"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_6_93"
              transform="scale(0.0163934 0.0149254)"
            />
          </pattern>
          <image
            id="image0_6_93"
            width="61"
            height="67"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    </div>
  );
}

export default MobiliseStar;
