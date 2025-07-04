import ModeToggle from "@/components/myUi/modeToggle";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center justify-center relative md:px-0 px-5">
        <div className="fixed right-5 top-5 z-50">
          <ModeToggle />
        </div>
        {children}
      </div>
    </>
  );
}
