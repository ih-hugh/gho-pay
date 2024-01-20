import { FC, ReactNode } from "react";
import classNames from "classnames";

interface HeroProps {
  children: ReactNode;
  className?: string;
  backgroundImage?: string;
}

export const Hero: FC<HeroProps> = ({ children, className, backgroundImage }) => {
  return (
    <div className={classNames("hero", className)} style={{ backgroundImage }}>
      <div className="hero-overlay bg-base-100"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-full flex flex-col">{children}</div>
      </div>
    </div>
  );
};
