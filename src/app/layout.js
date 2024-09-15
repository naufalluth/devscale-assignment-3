import { Inter, Pinyon_Script } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { DiaryText } from "@/components/typedText";


export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const pinyon = Pinyon_Script({ subsets: ["latin"], variable: "--font-pinyon", weight: "400" });

export const metadata = {
  title: "Dear Diary",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${pinyon.variable} ${inter.variable}`} >
      <body className="flex flex-col justify-center items-center">
        <Header />
        <DiaryText />
        <div>{children}</div>
      </body>
    </html >
  );
}
