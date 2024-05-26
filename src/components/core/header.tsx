import Image from "next/image";
import React from "react";
import logo from "@/assets/logos/logo.png";
import Menu from "@/assets/icons/menu";

function Header() {
  return (
    <section className="grid grid-cols-2 p-4 shadow-md">
      <div className="flex items-center">
        <Image src={logo} alt={"mobilise logo"} width={230} height={46} />
      </div>
      <div className="flex justify-end items-center">
        <Menu />
      </div>
    </section>
  );
}

export default Header;
