import BodyComponent from "@/LandingPage/Sections/Body";
import Header from "@/LandingPage/Sections/Header";

export default async function Home() {
  return (
    <>
      <section className=" relative w-screen h-screen flex items-center justify-center flex-col text-neutral-200">
        <Header />
        <BodyComponent />
      </section>
    </>
  );
}
