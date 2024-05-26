import { IconBaseProps } from "@/types/types";

interface Props extends IconBaseProps {}

function MaleIcon({ className, onClick }: Props) {
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
        width="28"
        height="65"
        viewBox="0 0 28 65"
        fill="none"
      >
        <path
          d="M22.6354 16.1727C21.1262 14.7547 19.6515 14.5086 18.8913 14.4898C18.8466 14.4868 18.8021 14.483 18.7568 14.483H8.34501C8.29866 14.483 8.25312 14.4871 8.2073 14.49C7.44653 14.5094 5.97349 14.7563 4.46595 16.1725C0.99193 19.4371 -0.432065 26.8654 0.233849 38.2509C0.300952 39.3967 1.25091 40.2809 2.38412 40.2809C2.42643 40.2809 2.46928 40.2799 2.51213 40.2772C3.70086 40.2076 4.60797 39.1876 4.53844 37.9989C3.98437 28.5289 5.05748 23.4811 6.26238 20.9756V29.8928V34.997V61.4072C6.26238 63.2478 7.75456 64.7389 9.59411 64.7389C11.4342 64.7389 12.9264 63.2478 12.9264 61.4072V37.0799H14.1755V61.4072C14.1755 63.2478 15.6676 64.7389 17.5072 64.7389C19.3473 64.7389 20.8395 63.2478 20.8395 61.4072V34.997V29.8928V20.9767C22.0441 23.4824 23.1172 28.5303 22.5631 37.9992C22.4936 39.1879 23.4007 40.2079 24.5894 40.2774C24.6323 40.2799 24.6749 40.2812 24.7175 40.2812C25.8507 40.2812 26.8006 39.397 26.8677 38.2511C27.5339 26.8656 26.1099 19.4374 22.6354 16.1727Z"
          fill="black"
        />
        <path
          d="M13.5511 12.8661C16.8999 12.8661 19.6147 10.1513 19.6147 6.80252C19.6147 3.4537 16.8999 0.738953 13.5511 0.738953C10.2023 0.738953 7.48754 3.4537 7.48754 6.80252C7.48754 10.1513 10.2023 12.8661 13.5511 12.8661Z"
          fill="black"
        />
      </svg>
    </div>
  );
}

export default MaleIcon;