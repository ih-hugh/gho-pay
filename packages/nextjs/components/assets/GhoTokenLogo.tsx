import Image from "next/image";

export const GhoTokenLogo = ({ className }: { className: string }) => {
  return (
    <Image
      className={className}
      src="/GhoToken.png"
      width="36"
      height="36"
      alt="Gho Token Logo"
      quality={100}
      priority
    />
  );
};
