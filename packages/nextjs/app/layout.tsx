import "@rainbow-me/rainbowkit/styles.css";
import { Metadata } from "next";
import { GhoPayAppWithProviders } from "~~/components/gho-pay/GhoPayAppWithProviders";
import "~~/styles/globals.css";

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : `http://localhost:${process.env.PORT}`;
const imageUrl = `${baseUrl}/thumbnail.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "GhoPay App",
    template: "%s | GhoPay App",
  },
  description: "A Decentralized Payment System",
  openGraph: {
    title: {
      default: "GhoPay App",
      template: "%s | GhoPay App",
    },
    description: "A Decentralized Payment System",
    images: [
      {
        url: imageUrl,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [imageUrl],
    title: {
      default: "GhoPay App",
      template: "%s | GhoPay App",
    },
    description: "A Decentralized Payment System",
  },
  icons: {
    icon: [{ url: "/favicon.png", sizes: "32x32", type: "image/png" }],
  },
};

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body suppressHydrationWarning={true} data-theme="ghoPayLight">
        <GhoPayAppWithProviders>{children}</GhoPayAppWithProviders>
      </body>
    </html>
  );
};

export default ScaffoldEthApp;
