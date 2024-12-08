import type { Metadata } from "next";
import { Jomhuria } from "next/font/google";
import "../app/css/globals.css";
import "../app/css/transition.css";
import { FlipNav } from "./NavBar";

// Initialize the jomhuria font
const jomhuria = Jomhuria({
  subsets: ["latin"], // Specify subsets you want to include
  weight: "400", // Jomhuria supports only one weight (400)
});


export const metadata: Metadata = {
  title: "Brock Whitson Portfolio",
  description: "Created by Brock Whitson",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">


      <body className={jomhuria.className}>
        <div className="sticky-nav">
        <FlipNav />
        </div>
        {children}
      </body>
    </html>
  );
}
