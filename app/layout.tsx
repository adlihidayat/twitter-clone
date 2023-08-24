import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "./_components/nav";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "twitter clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} sm:flex justify-center text-[#E7E9EA] bg-black`}
      >
        <div>
          <Nav />
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
