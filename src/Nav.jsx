const Nav = () => {
  return (
    <nav className="sticky grid top-0 p-5 w-full h-[10vh] z-10">
      <div className="test"></div>
      <ul className="flex justify-end items-center gap-5">
        <li>Projects</li>
        <li>About Me</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Nav;
