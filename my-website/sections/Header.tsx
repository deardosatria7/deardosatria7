import Link from "next/link";
import { BsSun } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <nav className="py-10 flex justify-between">
        <h1 className="text-xl">Hello World!</h1>
        <ul>
          <li className="cursor-pointer text-2xl">
            <BsSun />
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Header;
