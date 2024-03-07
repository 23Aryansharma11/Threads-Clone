import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import LSideBar from "@/components/shared/LeftSidebar";
import Tbar from "@/components/shared/Topbar";
import RSidebar from "@/components/shared/RightSidebar";
import Bbar from "@/components/shared/Bottombar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Threads",
  description: "Threads app made with NextJS and Clerk.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>

    <html lang="en">
      <body className={inter.className}>
        <Tbar/>
        <main className="flex">
          <LSideBar />
            <section className="main-container">
              <div className="w-full max-w-4xl ">
                {children}
              </div>
            </section>
          <RSidebar />
        </main>
        <Bbar />
        </body>
    </html>
    </ClerkProvider>
  );
}
