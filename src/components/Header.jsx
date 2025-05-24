import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoPerson } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

import NavLinks from "../ui/NavLinks";
import Tabs from "../ui/Tabs";

function Header() {
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
                  <NavLink>Home</NavLink>
                </Tabs.Nav>
              </Tabs.Tab>
              <Tabs.Tab name="art">
                <Tabs.Nav>
                  <NavLink>
                    Art &amp; Crafts
                  </NavLink>
                </Tabs.Nav>
                <Tabs.List name="art">
                  <NavLinks to="/electronics/laptop">Crafting</NavLinks>
                  <NavLinks to="/electronics/computers-tablets">
                    Painting, Drawing &amp; Art Supplies
                  </NavLinks>
                </Tabs.List>
              </Tabs.Tab>
            </Tabs>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/login">
              <IoPerson className="text-[18px] transition-all duration-200 hover:text-stone-700" />
            </Link>
            <Link>
              <HiOutlineShoppingCart className="text-[18px] transition-all duration-200 hover:text-stone-700" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
