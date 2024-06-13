import { Logo } from "@/components/Logo"

export const Bottom = () => {
  return (
    <div className="my-10 text-black">
      <p className="mb-10 text-xs md:text-base xl:text-lg font-medium text-center">
        TODO APP
      </p>
      <div className="flex  gap-4  items-center">
        <p className="text-xs md:text-base xl:text-lg">Powered by </p>
        <Logo
          src={
            "https://i.postimg.cc/cJ6JKkPt/flux-logo.png"
          }
          className="h-8 lg:h-10"
        />
      </div>
    </div>
  );
};