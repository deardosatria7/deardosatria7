const Button = ({ children, className, onClick }) => {
  return (
    <button className={`cursor-pointer text-2xl ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
