import type Metadata from "next";
import { Inter } from "next/font/google";
import "./app.css";
import "./globals.css";
import ConfigureAmplifyClientSide from "@/components/configureAmplifyClient";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fybinder",
  description: "Relive your nostalgia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>  {children}
          <ConfigureAmplifyClientSide />
        </>

      </body>

    </html>
  );
}
