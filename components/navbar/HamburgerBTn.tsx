"use client";

import { useState } from "react";
import { classNames } from "@/lib/classNames";
import { Logout } from "@/components/Logout";
import { Profile } from "@/components/Profile";

export const HamburgerBtn = () => {
  const [openState, setOpenState] = useState(false);

  const buttonClick = () => {
    setOpenState(!openState);
  };

  return (
    <>
      <button
        type="button"
        className={classNames(
          openState && "open",
          "z-40 block lg:hidden  hamburger   p-6 h-5 w-5 text-black    "
        )}
        onClick={buttonClick}
      >
        <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<title>Mobile menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
		</svg>
      </button>
      {openState && <MobileMenu />}
    </>
  );
};

const MobileMenu = () => {
  return (
    <div className="flex flex-col gap-6  absolute top-12 right-8 bg-brand-contrast-color w-[175px] h-[160px] py-6 px-4 rounded-3xl border border-color-shade-2  ">
     <Profile />
     <Logout />
    </div>
  );
};