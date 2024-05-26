"use client";

import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Hero from "@/assets/logos/hero";
import Title from "@/components/core/title";

function MyApp() {
  const [screenSize, setScreenSize] = useState<string>("unknown");
  const router = useRouter();

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
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Mobilise | Quiz</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <main className="h-[100vh] flex flex-col items-center overflow-auto hide-scroll grow">
        <div className="flex flex-col items-center justify-center">
          <Hero onClick={() => router.push("/register")} />
        </div>

        <div className="p-8">
          <Title text="What we do" />
          <p className="mt-4 text-sm mb-4">
            Mobilise was created to journey alongside those experiencing
            homelessness and explore how we can best make a tangible impact in
            the lives of those in need. Our work spans functional assistance on
            the streets to our Australian-first direct giving programs that
            provide sustainable support systems. Our efforts create a
            substantial impact on a larger scale by championing the cause
            through our desire to ignite A Movement among Australians.
          </p>

          <Title text="Our Pillars" />
          <h2 className="mt-4 text-2xl mb-4 font-bold">Outreach</h2>
          <p className="mt-4 text-sm mb-4">
            Our volunteers connect with friends on the street through
            conversations and care packages. The aim of Outreach is to form
            social connections and provide more meaningful opportunities for
            people to get involved and make a difference across the country.
          </p>
        </div>
      </main>
    </div>
  );
}

export default MyApp;
