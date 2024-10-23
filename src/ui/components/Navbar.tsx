import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { navLinks as initialNavLinks } from "../../constants/constants";
import ToggleBtn from "./ToggleBtn";
import images from "../../assets/images";
import { useAppSelector } from "../../hooks/hooks";
import SearchInput from "./SearchInput";
import UserBtn from "./UserBtn";
import WishingListBtn from "./WishingListBtn";
import CartBtn from "./CartBtn";
import { RootState } from "../../store/store";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [navLinks, setNavLinks] = useState(initialNavLinks);
  const token = useAppSelector((state: RootState) => state.auth.token);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updatedLinks = navLinks.map((link) => ({
      ...link,
      isActive: link.href === location.pathname,
    }));
    setNavLinks(updatedLinks);
    if(isOpen) setIsOpen(false);
    if(isUserMenuOpen) setIsUserMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    if (isUserMenuOpen) setIsUserMenuOpen(false);
    setIsOpen(!isOpen);
  };

  const handleUserMenuToggle = () => {
    if (isOpen) setIsOpen(false);
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        if (isOpen) setIsOpen(false);
        if (isUserMenuOpen) setIsUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, isUserMenuOpen]);

  return (
    <nav className="border-b bg-white sticky top-0 mt-5 z-50">
      <div
        className="container relative py-3 flex items-center justify-between gap-x-3 lg:gap-x-0"
        ref={menuRef}
      >
        {/* Logo */}
        <Link to={"/"}>
          <img src={images.logo} alt="Logo" className="h-[24px]" />
        </Link>

        {/* Links */}
        <ul
          className={`links__menu ${
            isOpen ? "top-full opacity-100" : "bottom-full opacity-0"
          }`}
        >
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.href}
                aria-current={link.isActive ? "page" : undefined}
                className={`hover:border-b pb-1 ${
                  link.isActive
                    ? "border-b border-black"
                    : token && link.name === "SignUp"
                    ? "hidden"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1 md:gap-2">
          {/* Search Input */}
          <SearchInput />
          {/* Icons */}
          <div className="flex items-center justify-between gap-1 md:gap-2">
            <WishingListBtn />
            <CartBtn />
            {token && (
              <UserBtn
                isOpen={isUserMenuOpen}
                toggleMenu={handleUserMenuToggle}
              />
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <ToggleBtn
          icon={isOpen ? faXmark : faBars}
          className="lg:hidden size-8 flex items-center justify-center"
          onClick={toggleMenu}
          ariaLabel="toggle button"
          role="button"
        />
      </div>
    </nav>
  );
};

export default Navbar;
