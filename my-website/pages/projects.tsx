import Header from "@/sections/Header";
import Link from "next/link";
import { IoChevronBack } from "react-icons/io5";
import Card from "@/components/card";
import Image from "next/legacy/image";
import Alpha from "../public/alpha.jpg";
import CV from "../public/cv.png";
import Footer from "@/sections/Footer";

const projects = () => {
  return (
    <>
      <Header>
        <Link href={"/"} className="text-2xl">
          <IoChevronBack />
        </Link>
        <h1 className="text-xl font-bold dark:text-white">Projects</h1>
      </Header>
      <main>
        <div className="flex flex-col justify-center md:flex-row md:flex-wrap md:gap-5">
          <div className="flex-1 basis-1/3">
            <Card>
              <Image src={Alpha} layout="responsive" alt="" />
              <div className="py-2">
                <div className="text-lg font-medium pb-2">Bimbel Alpha</div>
                <div className="text-sm">Static website made with HTML and Bootstrap CSS.</div>
                <a target="_blank" href="https://deardosatria7.github.io/Bimbel-Alpha" rel="noopener noreferrer">
                  <span className="text-blue-700 dark:text-blue-400 font-medium text-sm">Click here</span> to see more
                </a>
              </div>
            </Card>
          </div>
          <div className="flex-1 basis-1/3">
            <Card>
              <Image src={CV} layout="responsive" alt="" />
              <div className="py-2">
                <div className="text-lg font-medium pb-2">My Personal Website</div>
                <div className="text-sm">My own website made with Next.JS and Tailwindcss.</div>
              </div>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default projects;
