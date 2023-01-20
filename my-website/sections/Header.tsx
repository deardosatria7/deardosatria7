import Link from "next/link";
import { BsSun } from "react-icons/bs";
import { MdOutlineNightlight } from "react-icons/md";

function Header(title = "", description = "") {
  return (
    <>
      <nav className="py-10 flex justify-between">
        <h1 className="text-xl dark:text-gray-100 font-medium">{title}</h1>
        <ul className="flex justify-center gap-2">
          <li className="cursor-pointer text-xl justify center dark:text-white">{description}</li>
          <li className="cursor-pointer text-2xl">
            <MdOutlineNightlight color="white" />
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Header;
