import Image from "next/image";
import Logo from "../assets/logo.svg";
import LandingImg from "../assets/main.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="max-w-6xl mx-auto px-4 sm:px-8 py-6">
      <Image src={Logo} alt="Jobify" width={200} height={50} />
      </header>
      <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen grid lg:gird-cols-[1fr,400px] items-center">
      <div>
        <h1 className="capitalize text-4xl md:text-7xl font-bold">!
          Job <span className="text-primary">tracking</span> app
        </h1>
        <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </p>
        <Button asChild  className="mt-4">
        <Link href="/add-job">
          Get Started
        </Link>
        </Button>
        
      </div>
       <Image src={LandingImg} alt="Jobify" className="hidden lg:block" />
      </section>
    </main>
  );
}
