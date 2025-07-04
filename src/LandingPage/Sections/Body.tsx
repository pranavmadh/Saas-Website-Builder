import Link from "next/link";

export default function BodyComponent() {
  return (
    <>
      <div className="flex flex-col items-center gap-5 z-40 px-5 md:px-0 ">
        <div>
          <p className="text-center text-xl ">Run Your agency , In one place</p>
        </div>

        <div className="bg-gradient-to-r from-primary to-purple-600 text-transparent bg-clip-text relative flex flex-col items-center ">
          <h1 className="text-4xl sm:text-5xl font-bold text-center md:text-[100px] text-primary-foreground">
            One Platform,
          </h1>
          <h1 className="text-5xl sm:text-6xl font-bold text-center md:text-[110px] ">
            For Your Agency
          </h1>
        </div>
        <p className="max-w-2xl text-center text-neutral-300 mt-5 text-sm mx-5 ">
          From automation to collaboration, our solution empowers your team to
          work smarter, not harder. Discover the endless possibilities waiting
          for you.
        </p>
      </div>
      <div className="z-50 mt-10">
        <Link href="/agency/sign-in">
          <span className="cursor-pointer  text-black hover:text-black bg-secondary-foreground transition-colors  hover:bg-neutral-300 p-4 px-6 rounded-full font-bold ">
            Get Started Now
          </span>
        </Link>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#5f5f5f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] z-0 "></div>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(165%_145%_at_50%_20%,#000_40%,#63e_100%)]"></div>
    </>
  );
}
