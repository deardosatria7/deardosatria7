import Header from "@/sections/Header";
import Link from "next/link";
import { IoChevronBack } from "react-icons/io5";

const projects = () => {
  return (
    <>
      <Header>
        <Link href={"/"} className="text-2xl">
          <IoChevronBack />
        </Link>
        <h1 className="text-xl font-bold dark:text-white">Projects</h1>
      </Header>
      <div className="flex justify-center py-20">Under maintenance...</div>
    </>
  );
};
export default projects;
