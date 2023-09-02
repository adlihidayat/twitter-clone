import "./globals.css";
import type { Metadata } from "next";
import Nav from "./_components/nav";
import { Roboto } from "next/font/google";
import SessionProvider from "./_components/SessionProvider";

const roboto = Roboto({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "twitter clone",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body
        className={`${roboto.className} sm:flex justify-center text-[#E7E9EA] bg-black`}
      >
        {/* <div>
          <Nav />
          <div>{children}</div>
        </div> */}
        <SessionProvider>
          <Nav />
          <div>{children}</div>
        </SessionProvider>
      </body>
    </html>
  );
}
