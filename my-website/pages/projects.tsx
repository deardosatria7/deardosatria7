import Header from "@/sections/Header";
import Link from "next/link";
import {IoChevronBack} from "react-icons/io5";
import Card from "@/components/card";
import Image from "next/legacy/image";
import Alpha from "../public/alpha.jpg";
import Semar from "../public/semar.jpg";
import Mat from "../public/mat.png";
import pwd from "../public/pwd-gen.jpg";
import Footer from "@/sections/Footer";

const projects = () => {
  return (
    <>
      <Header>
        <Link href={"/"} className="text-2xl">
          <IoChevronBack />
        </Link>
        <h1 className="text-xl font-bold dark:text-white">/projects</h1>
      </Header>
      <main>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 my-2">
          <div className="">
            <Card>
              <a
                target="_blank"
                href="https://deardosatria7.github.io/Bimbel-Alpha"
                rel="noopener noreferrer"
              >
                <div className="dark:opacity-70">
                  <Image src={Alpha} layout="responsive" alt="" />
                </div>
                <div className="py-2">
                  <div className="text-lg font-medium pb-2">Bimbel Alpha</div>
                  <div className="text-sm">
                    Website template made with HTML and Bootstrap CSS.
                  </div>
                </div>
              </a>
            </Card>
          </div>
          <div className="">
            <Card>
              <a
                target="_blank"
                href="https://github.com/deardosatria7/matematikaswf"
                rel="noopener noreferrer"
              >
                <div className="dark:opacity-70">
                  <Image src={Mat} layout="responsive" alt="" />
                </div>
                <div className="py-2">
                  <div className="text-lg font-medium pb-2">
                    Math learning media
                  </div>
                  <div className="text-sm">
                    High school mathematics learning media based on flash
                    player.
                  </div>
                </div>
              </a>
            </Card>
          </div>
          <div className="">
            <Card>
              <a
                target="_blank"
                href="https://github.com/Rizakalhasbi/NewsApp"
                rel="noopener noreferrer"
              >
                <div className="dark:opacity-70">
                  <Image src={Semar} layout="responsive" alt="" />
                </div>
                <div className="py-2">
                  <div className="text-lg font-medium pb-2">Semar News</div>
                  <div className="text-sm">
                    News portal app for android using Flutter and News API.
                  </div>
                </div>
              </a>
            </Card>
          </div>
          <div className="">
            <Card>
              <a
                target="_blank"
                href="https://deardosatria7-password-generator.vercel.app/"
                rel="noopener noreferrer"
              >
                <div className="dark:opacity-70">
                  <Image src={pwd} layout="responsive" alt="" />
                </div>
                <div className="py-2">
                  <div className="text-lg font-medium pb-2">
                    Password generator
                  </div>
                  <div className="text-sm">
                    Custom strong password generator.
                  </div>
                </div>
              </a>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default projects;
