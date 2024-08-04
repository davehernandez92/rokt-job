import { Archivo } from "next/font/google";
import "./globals.css";

const inter = Archivo({ subsets: ["latin"] });

export const metadata = {
  title: "David's Job application",
  description: "David's awesome job application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
