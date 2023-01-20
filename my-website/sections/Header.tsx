import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsSun } from "react-icons/bs";
import { MdOutlineNightlight } from "react-icons/md";

export default function Header({ children }) {
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
        {children}
        <ul className="flex justify-center gap-2">
          <li className="cursor-pointer text-xl justify center dark:text-white"></li>
          <li>{renderThemeChanger()}</li>
        </ul>
      </nav>
    </>
  );
}
