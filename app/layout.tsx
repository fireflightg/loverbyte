import "./globals.css";
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-fredoka",
});

export const metadata = {
  title: "Lovebyte - Date Night Generator",
  description: "Generate cute date night ideas!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fredoka.variable} font-sans`}>{children}</body>
    </html>
  );
}
