const Nav = () => {
  return (
    <nav className="mimi-pink-text font-extrabold uppercase sticky grid top-0 h-[10vh] rounded-full shadow-2xl z-10">
      <div className="w-full h-full absolute backdrop-blur-xl -z-10"></div>
      <ul className="flex justify-end items-center gap-5 text-xs p-5">
        <li>Projects</li>
        <li>About Me</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Nav;
