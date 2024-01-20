import Image from "next/image";

export const AAVELogo = ({ className }: { className: string }) => {
  return <Image className={className} src="/aave.png" width="32" height="32" alt="Aave Token Logo" />;
};
