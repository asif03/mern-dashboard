import React from "react";
import classNames from "classnames";

// List of all available button view types.
export enum VARIANTS {
  PRIMARY = "primary",
  PRIMARY_DARK = "primary-dark",
  PRIMARY_OUTLINE = "primary-outline",
  PRIMARY_OUTLINE_DARK = "primary-outline-dark",
}

const VARIANT_CLASSNAMES = {
  [VARIANTS.PRIMARY]: "",
};

interface IButton
  extends IButtonStyleAttributes,
    React.HTMLAttributes<HTMLButtonElement> {
  component?: React.ElementType;
  type?: "submit" | "reset" | "button";
}

interface IButtonStyleAttributes {
  variant?: "outline" | "primary";
  className?: string;
  block?: boolean;
  color?: string;
  textColor?: TEXT_COLORS;
  loading?: boolean;
}

// Returns button class names list according to passed props.
const getClassNames = (
  variant = VARIANTS.PRIMARY,
  className?: string,
): string => classNames("btn", VARIANT_CLASSNAMES[variant], className);

const Button = ({ type, variant, className, ...prpos }: IButton) => {
  return (
    <>
      <button
        type={type}
        variant={variant}
        className={getClassNames(variant, className)}
      >
        {prpos.children}
      </button>
    </>
  );
};

export default Button;
