import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import CursorAura from "../components/CursorAura"; // Import the new component
import ScrollToTopButton from "../components/ScrollToTopButton"; // Import the new component
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Mohammed Asraf S - AI & Cloud Engineer Portfolio",
  description: "Portfolio of Mohammed Asraf S, an AI Developer and Cloud Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${poppins.className} text-white antialiased min-h-screen`}
        style={{ background: 'linear-gradient(to bottom right, ##00BFFF, ##7DF9FF)' }}
      >
        <CursorAura /> {/* Add the aura component */}
        {children}
        <ScrollToTopButton /> {/* Add the scroll to top button */}
      </body>
    </html>
  );
}
