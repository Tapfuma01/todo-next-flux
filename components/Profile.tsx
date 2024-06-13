"use client";
import { useEffect, useState } from "react";
import { register } from "@teamhanko/hanko-elements";

const hankoApi = "https://9aca64d7-d59a-4661-8ba7-7c4af8958d5a.hanko.io";

export const Profile = () => {
  const [openState, setOpenState] = useState(false);

  useEffect(() => {
    register(hankoApi ?? "").catch((error) => {
      console.log(error);
    });
  }, []);

  const openProfile = () => {
    setOpenState(!openState);
  };

  return (
    <>
      <button className="text-black" type="button" onClick={openProfile}>
        Profile
      </button>
      {openState && (
        <div className=" lg:backdrop-blur-md lg:bg-background-color/30 z-30 lg:min-h-screen w-full absolute left-0 right-0 top-36 lg:top-24  ">
          <section className=" w-[350px] sm:w-[420px] lg:w-[450px]  h-auto lg:mx-0 px-6 py-8 rounded-2xl z-50 lg:shadow-color-shade-1/10 shadow-md bg-brand-contrast-color border border-color-shade-2 absolute right-0 top-0 lg:right-20 lg:top-20 2xl:right-60">
            <hanko-profile />
          </section>
        </div>
      )}
    </>
  );
};
