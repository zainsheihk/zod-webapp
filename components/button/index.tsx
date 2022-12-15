import React from "react";
import { Button as Btn } from "antd";
import { ButtonProps } from "antd/es/button/button";

type customProps = {
  buttonType:
    | "primary"
    | "secondary"
    | "primary-outline"
    | "accent"
    | "accent-outline";
};

function Button({
  size,
  shape = "round",
  buttonType = "primary",
  children,
  ...rest
}: Partial<ButtonProps & customProps>) {
  return (
    <Btn
      className={`btn btn-${buttonType}`}
      shape={shape}
      size={size}
      {...rest}
    >
      {children}
    </Btn>
  );
}

export default Button;
