"use client";
import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { register } from "@teamhanko/hanko-elements";

const hankoApi = "https://9aca64d7-d59a-4661-8ba7-7c4af8958d5a.hanko.io";
export default function Login() {
  const router = useRouter();
  const [hanko, setHanko] = useState<Hanko>();

  useEffect(() => {
    import("@teamhanko/hanko-elements").then(({ Hanko }) =>
      setHanko(new Hanko(hankoApi ?? ""))
    );
  }, []);

  const redirectAfterLogin = useCallback(() => {
    router.replace("/todo");
  }, [router]);

  useEffect(
    () =>
      hanko?.onAuthFlowCompleted(() => {
        redirectAfterLogin();
      }),
    [hanko, redirectAfterLogin]
  );

  useEffect(() => {
    //
    register(hankoApi ?? "").catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <div className="flex min-h-screen justify-center items-center bg-slate-50">
      <div className="bg-white p-5 rounded-2xl shadow-md">
        <hanko-auth />
      </div>
    </div>
  );
}
