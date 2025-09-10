const Nav = () => {
  // Navigation items stored in an array for cleaner and scalable code
  const NavItems = [
    { label: "Projects", href: "#projects" },
    { label: "About Me", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  // Base Tailwind classes reused for all nav links
  const baseClasses =
    "cursor-pointer hover:text-white hover:scale-105 transition duration-300 ease-in-out";

  return (
    <nav className="p-6 backdrop-blur-2xl fixed top-0 right-0 w-full z-50">
      <ul className="flex justify-end items-center gap-4 text-xs md:text-sm text-rose-100 uppercase font-bold">
        {NavItems.map(({ label, href }) => (
          <a key={href} href={href}>
            <li className={baseClasses}>{label}</li>
          </a>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
