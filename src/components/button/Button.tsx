import React, { ButtonHTMLAttributes } from "react";
import "./button.scss";
type ButtonProps = {
  title: string;
  type: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
function Button(props: ButtonProps) {
  return (
    <button className={`indicina__button ${props.className}`} {...props}>
      {props.title}
    </button>
  );
}

export default Button;
