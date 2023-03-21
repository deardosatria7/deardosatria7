import themeChanger from "@/components/themeChanger";

export default function Header({children}: any) {
  return (
    <>
      <nav className="py-10 flex justify-between">
        <div className="flex gap-5 justify-center">{children}</div>
        <ul className="flex justify-center gap-2">
          <li>{themeChanger()}</li>
        </ul>
      </nav>
    </>
  );
}
