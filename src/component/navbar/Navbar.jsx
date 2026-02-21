"use client";
import PathLink from "./PathLink";
import { IoSearchCircleOutline } from "react-icons/io5";
import Lottie from "lottie-react";
import cartAnimation from "@/assets/cart-animation.json";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import MobileNav from "./MobileNavBar";
import { Badge } from "@/components/ui/badge";

const Navbar = () => {
  return (
    <nav className="bg-veryDark text-light flex justify-between  px-[40px] py-[20px] w-[100%]">
      <div className="flex justify-center items-center  mx-5">
        {" "}
        <Image src={Logo} alt="" height={50} width={80} />
      </div>
      <div className="hidden xl:flex lg:flex  justify-around  w-[100%] ml-[100px]">
        <PathLink />

        <div className="flex justify-center items-center gap-5">
          <input className="outline-none h-5  rounded-full p-2 text-dark" />
          <IoSearchCircleOutline className="size-5" />
          {/* <Badge
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'right',
  }}
> */}
          <Lottie animationData={cartAnimation} className="w-[50px]"  />
          
          
          {/* </Badge> */}
        </div>
      </div>
      <div className="lg:hidden">
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
