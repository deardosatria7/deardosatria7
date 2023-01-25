import Link from "next/link";

const about = () => {
  return (
    <>
      <div className="py-20">
        <h1 className="flex justify-center font-bold text-xl py-5">Oops you&apos;re out of boundaries</h1>
        <Link href={"/"} className="flex justify-center">
          <h3 className="bg-gray-400 hover:bg-gray-500 w-36 text-white text-center rounded-full dark:bg-zinc-700 dark:hover:bg-zinc-600">Take me back</h3>
        </Link>
      </div>
    </>
  );
};
export default about;
