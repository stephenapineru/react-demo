import { ReactNode } from "react";
import Alert from "./Alert";

interface ButtonProps {
  children: string;
  color?: string; // ? means optional, since we have a default value declared in the component
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: ButtonProps) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
