"use client";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Hanko } from "@teamhanko/hanko-elements";

const hankoApi = "https://9aca64d7-d59a-4661-8ba7-7c4af8958d5a.hanko.io";

export const Logout = () => {
  const router = useRouter();
  const [hanko, setHanko] = useState<Hanko>();

  useEffect(() => {
    import("@teamhanko/hanko-elements").then(({ Hanko }) =>
      setHanko(new Hanko(hankoApi ?? ""))
    );
  }, []);

  const logout = () => {
    hanko?.user
      .logout()
      .then(() => {
        router.push("/");
        router.refresh();
        return;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <button className=" bg-white text-black rounded-full py-2 px-10 xl:text-lg border font-IBM border-black text-base-color text-base hover:ring-0 hover:ring-base-color hover:border-base-color hover:bg-black hover:text-white" type="button" onClick={logout}>Logout</button>
    </>
  );
};
