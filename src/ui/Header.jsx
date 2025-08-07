import { useLocalStorage } from "react-haiku";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoPerson } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

import { useOverlay } from "../context/Overlay";
import Button from "../ui/Button";
import NavLinks from "../ui/NavLinks";
import Tabs from "../ui/Tabs";

function Header() {
  const [shoppingCart, setShoppingCart] = useLocalStorage("cart", []);

  const { setIsOpen } = useOverlay();

  const shoppingCartLength = shoppingCart.length;
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-yellow-400 to-yellow-300 shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-2xl font-bold text-gray-900 transition-colors hover:text-gray-700"
            >
              Amazon
            </Link>
          </div>

          <div className="relative flex flex-1 items-center justify-center gap-4">
            <Tabs>
              <Tabs.Tab>
                <Tabs.Nav>
                  <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "font-bold" : "")}
                  >
                    Home
                  </NavLink>
                </Tabs.Nav>
              </Tabs.Tab>
            </Tabs>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/login">
              <IoPerson className="text-[18px] transition-all duration-200 hover:text-stone-700" />
            </Link>
            <Button
              className="relative cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              <HiOutlineShoppingCart className="text-[18px] transition-all duration-200 hover:text-stone-700" />
              {shoppingCartLength > 0 && (
                <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  {shoppingCartLength}
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
