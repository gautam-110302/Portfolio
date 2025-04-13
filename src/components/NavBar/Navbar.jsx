import closeIcon from "../../assets/nav/closeIcon.png";
import menuIcon from "../../assets/nav/menuIcon.png";
import { useEffect, useState } from "react";
import useScrollPosition from "../../hooks/useScrollPosition";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isScrolled = useScrollPosition();

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    menuOpen
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [menuOpen]);

  return (
    <nav
      className={`sticky top-0 z-50 bg-bg-color backdrop-blur-md transition-all duration-300 
        flex flex-row justify-between items-center text-neutral-50 font-roboto
        px-6 sm:px-[10%] ${isScrolled ? "py-2" : "py-6"}`}
    >
      <button onClick={() => goToTop()}>
        <div className="text-2xl sm:text-3xl font-semibold cursor-pointer">
          Portfolio
        </div>
      </button>

      <div className="flex flex-col sm:flex-row items-end sm:items-center">
        <button className="sm:hidden cursor-pointer w-6 h-6" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
          <img
            className={` transition-transform duration-300 ${
              menuOpen ? "rotate-90" : "rotate-0"
            }`}
            src={menuOpen ? closeIcon : menuIcon}
            alt="menu-button"
            
          />
        </button>
        <ul
          className={`${
            menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          } flex-col sm:flex-row list-none gap-[13px] sm:gap-[47px] sm:opacity-100 sm:max-h-none sm:flex 
  transition-all duration-300 overflow-hidden border-inherit rounded-[10px] 
  bg-[linear-gradient(to_top,oklch(45%_0.15_270_/_0.2),oklch(45%_0.15_270_/_1))] sm:bg-none sm:bg-bg-color px-[24px] py-[24px]`}
          onClick={() => setMenuOpen(false)}
        >
          {["About", "Experience", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="text-2xl transition-all duration-300 hover:underline hover:text-primary-color"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
