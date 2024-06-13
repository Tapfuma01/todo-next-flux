import { Logo } from "@/components/Logo";

export const Topper = () => {
  return (
    <div className=" flex items-center gap-4 ">
      <Logo
        src={
          "https://wp.fluxfullcircle.com/app/uploads/2023/02/logo-dark.svg"
        }
        className="h-10 lg:h-12"
      />
      <p className="text-xs md:text-base xl:text-lg font-light text-black">TODO APP</p>
    </div>
  );
};