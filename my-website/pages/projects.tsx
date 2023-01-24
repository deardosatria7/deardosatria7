import Header from "@/sections/Header";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";

const projects = () => {
  return (
    <>
      <Header>
        <Link href={"/"} className="text-2xl">
          <IoMdArrowRoundBack />
        </Link>
        <h1 className="text-xl font-bold dark:text-white">Projects</h1>
      </Header>
      <div className="flex justify-center py-20">Under maintenance...</div>
    </>
  );
};
export default projects;
