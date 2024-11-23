import { Toaster } from "react-hot-toast";
import Navbar from "../app/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "MERN Stack App",
  description: "Full-stack application built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Toaster position="top-right" />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
