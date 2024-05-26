"use client";

import Header from "@/components/core/header";
import { useState, useEffect } from "react";
import '@/styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [screenSize, setScreenSize] = useState<string>("unknown");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScreenSize("mobile");
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };
  
    window.addEventListener("resize", handleResize);
    handleResize();
  
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <html lang="en">
      <body>
        {screenSize === "desktop" ? (
          <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-grey-100 p-4 rounded-lg mx-4 text-black-100 text-2xl font-bold">
              Please use the app at a smaller screen size.
            </div>
          </div>
        ) : (
          <>
            <Header />
            <main>{children}</main>
          </>
        )}
      </body>
    </html>
  );
}
