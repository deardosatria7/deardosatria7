const card = ({ children }: any) => {
  return (
    <>
      <div className="flex-col my-2 text-start shadow-xl rounded-md p-3 hover:scale-105 transform duration-200 bg-white dark:bg-neutral-800">{children}</div>
    </>
  );
};

export default card;
