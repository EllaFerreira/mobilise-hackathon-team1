import { NextPage } from "next/types";
import { ReactElement, ReactNode } from "react";

export type RFC<T> = React.FC<T>;

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export interface IconBaseProps {
  onClick?: () => void;
  className?: string;
  width?: number;
  height?: number;
}

export interface UserRegisterForm {
  name: string;
  age: string;
  gender: string;
  postcode: string;
  email: string;
}