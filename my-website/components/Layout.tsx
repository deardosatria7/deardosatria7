import Head from "next/head";

const Layout = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>Deardo Satria</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="min-h-screen bg-white px-10 md:px-20 dark:bg-zinc-900 transform transition duration-300">{children}</section>
    </>
  );
};
export default Layout;
