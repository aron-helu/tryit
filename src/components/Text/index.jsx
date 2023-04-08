import React from "react";

const variantClasses = {
  h1: "font-normal sm:text-5xl md:text-5xl text-8xl",
  h2: "font-normal sm:text-5xl md:text-5xl text-[70px]",
  h3: "font-normal sm:text-5xl md:text-5xl text-[67px]",
  h4: "font-normal sm:text-5xl md:text-5xl text-[61px]",
  h5: "font-bold sm:text-[40px] md:text-[46px] text-[54px]",
  h6: "font-normal sm:text-[39px] md:text-[45px] text-[53px]",
  body1: "font-normal sm:text-4xl md:text-[42px] text-[46px]",
  body2: "font-normal sm:text-[32px] md:text-[38px] text-[42px]",
  body3: "sm:text-4xl md:text-[38px] text-[40px]",
  body4: "font-normal md:text-3xl sm:text-[28px] text-[32px]",
  body5: "sm:text-2xl md:text-[26px] text-[28px]",
  body6: "text-2xl md:text-[22px] sm:text-xl",
  body7: "font-normal text-[22px] sm:text-lg md:text-xl",
  body8: "font-normal text-xl",
  body9: "font-normal sm:text-5xl md:text-5xl text-[190px]",
  body10: "font-normal text-[19px]",
  body11: "text-lg",
  body12: "font-normal text-[17px]",
  body13: "text-base",
  body14: "font-normal text-[15px]",
  body15: "text-sm",
  body16: "font-normal text-xs",
  body17: "font-normal text-[10px]",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
