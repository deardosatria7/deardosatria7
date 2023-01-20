import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsSun } from "react-icons/bs";
import { MdOutlineNightlight } from "react-icons/md";

function Header(title = "", description = "") {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "light") {
      return (
        <button onClick={() => setTheme("dark")}>
          <BsSun />
        </button>
      );
    } else {
      return (
        <button onClick={() => setTheme("light")}>
          <MdOutlineNightlight color="white" />
        </button>
      );
    }
  };

  return (
    <>
      <nav className="py-10 flex justify-between">
        <h1 className="text-xl dark:text-gray-100 font-medium">{title}</h1>
        <ul className="flex justify-center gap-2">
          <li className="cursor-pointer text-xl justify center dark:text-white">{description}</li>
          <li>{renderThemeChanger()}</li>
        </ul>
      </nav>
    </>
  );
}
export default Header;
