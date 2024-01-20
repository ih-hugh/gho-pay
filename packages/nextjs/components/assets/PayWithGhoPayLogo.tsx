import Image from "next/image";

export const PayWithGhoPayLogo = ({ className }: { className: string }) => {
  return (
    <Image
      className={className}
      src="/pay-with-ghopay.png"
      width="183"
      height="183"
      alt="Aave Token Logo"
      quality={100}
      priority
    />
  );
};
