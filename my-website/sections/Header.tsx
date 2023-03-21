import ThemeChanger from "@/components/ThemeChanger";

export default function Header({children}: any) {
  return (
    <>
      <nav className="py-10 flex justify-between">
        <div className="flex gap-5 justify-center">{children}</div>
        <ul className="flex justify-center gap-2">
          <li>{ThemeChanger()}</li>
        </ul>
      </nav>
    </>
  );
}
