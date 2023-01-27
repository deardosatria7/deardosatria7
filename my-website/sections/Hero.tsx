import Image from "next/legacy/image";
import Header from "./Header";
import Link from "next/link";
import { AiOutlineInstagram, AiFillGithub } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import profilePic from "../public/deardo.jpg";

const Hero = () => {
  return (
    <>
      <Header>
        <h1 className="text-xl font-bold dark:text-white">Hello World!</h1>
      </Header>
      <section>
        <div className="lg:flex lg:justify-center lg:items-center">
          <div className="bg-gray-100 rounded-2xl py-4 dark:bg-neutral-800">
            {/* Profile picture */}
            <div className="lg:flex lg:justify-center lg:pt-10 lg:px-10">
              <div className="relative mx-auto my-5 rounded-full bg-gradient-to-t from-gray-200 to-white w-40 h-40 overflow-hidden lg:w-60 lg:h-60 lg:px-20 lg:my-auto">
                <Image src={profilePic} layout="fill" objectFit="cover" alt={""} />
              </div>

              {/* Description */}
              <div className="lg:flex-col">
                <div className="text-center px-10 pb-7 lg:text-left">
                  <h3 className="font-inter text-3xl text-sky-900 font-medium md:text-4xl dark:text-teal-500">Deardo Satria</h3>
                  <h4 className="font-inter text-md pt-1 pb-5 md:text-lg dark:text-white">Lifelong learner</h4>
                  <p className="mx-auto leading-7 font-sans font-light text-gray-800 text-md md:text-lg max-w-lg dark:text-white">
                    <span className="font-normal">He/him</span>. Self-taught programming student, focused on front end developers and mobile apps. There are few projects that I made (mostly just my coursework 🤣). Trying to become one
                    percent better everyday.
                  </p>
                </div>
                <div className="flex justify-center mb-4 gap-4 lg:justify-start lg:px-10">
                  <a href="/about" className="bg-gray-500 hover:bg-gray-600 text-white text-sm px-3 py-1 rounded-md dark:bg-neutral-700 dark:hover:bg-neutral-500">
                    About me
                  </a>
                  <Link href="/projects" legacyBehavior>
                    <a className="bg-gray-500 hover:bg-gray-600 text-white text-sm px-3 py-1 rounded-md dark:bg-neutral-700 dark:hover:bg-neutral-500">Projects</a>
                  </Link>
                </div>
                <div className="flex justify-center gap-8 text-3xl my-3 text-gray-600 lg:justify-start lg:px-10 lg:pt-2">
                  <a href="https://instagram.com/deardosatria_" target="_blank" rel="noopener noreferrer">
                    <AiOutlineInstagram />
                  </a>
                  <a href="https://github.com/deardosatria7" target="_blank" rel="noopener noreferrer">
                    <AiFillGithub />
                  </a>
                  <a href="https://t.me/itsmedeardo" target="_blank" rel="noopener noreferrer">
                    <BsTelegram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
