import { ReactNode } from "react";
import classNames from "classnames";

export const GradientText = ({
  children,
  className,
  color,
}: {
  children: ReactNode;
  className?: string;
  color?: string;
}) => {
  const generic = "inline-block text-transparent bg-clip-text leading-8";
  const ghoPayBlueCyanGradient = ` ${generic} bg-gradient-to-b from-[#15a5c9] to-[#67E8F9]`;
  const ghoPayPurpleBlueGradient = ` ${generic} bg-gradient-to-b from-[#9826C0] to-[#c551ff]`;
  const ghoPayGreyBlueGradient = ` ${generic} bg-gradient-to-b from-[#2d345a] to-[#191920]`;
  const defaultWhiteSilverGradient = ` ${generic} bg-gradient-to-b from-white to-silver`;
  return (
    <div
      className={classNames(className, {
        [ghoPayBlueCyanGradient]: color === "blue",
        [ghoPayPurpleBlueGradient]: color === "purple",
        [ghoPayGreyBlueGradient]: color === "grey",
        [defaultWhiteSilverGradient]: !color,
      })}
    >
      {children}
    </div>
  );
};
