import React, { useState } from "react";
import { Logo, Button, Menu, Avatar } from "..";
import { Link, NavLink } from "react-router-dom";
import { FiLogIn, FiMenu } from "react-icons/fi";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const user = useAuth();

  return (
    <header className="bg-white text-black font-sans shadow-sm sticky top-0 z-20">
      <div className="container flex justify-between items-center py-3 mx-auto">
        <Logo />
        {/* Desktop navbar */}
        <nav className="hidden md:block">
          {/* Navbar links */}
          <ul className="flex gap-10">
            <li>
              <NavLink
                to={"/"}
                className="relative block font-semibold  hover:scale-105 transition duration-300"
                activeClassName="text-white"
              >
                Home
              </NavLink>
            </li>
            {user && user?.isAdmin && (
              <li>
                <NavLink
                  to={"/dashboard/users"}
                  className="relative block font-semibold  hover:scale-105 transition duration-300"
                  activeClassName="text-white"
                >
                  Dashboard
                </NavLink>
              </li>
            )}
            <li>
              <NavLink
                to={"/recipe"}
                className="relative block font-semibold  hover:scale-105 transition duration-300"
                activeClassName="text-white"
              >
                Recipes
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/blog"}
                className="relative block font-semibold hover:scale-105 transition duration-300"
                activeClassName="text-white"
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className="relative block font-semibold  hover:scale-105 transition duration-300"
                activeClassName="text-white"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        {/* Sign in button */}
        {user ? (
          <Avatar />
        ) : (
          <Link to={"/auth/signin"} className="hidden md:block">
            <Button
              content={"Sign In"}
              customCss={"max-w-max rounded-full"}
              icon={<FiLogIn />}
            />
          </Link>
        )}
        {/* Menu button */}
        <FiMenu
          className="block md:hidden text-xl cursor-pointer"
          onClick={() => setIsCollapsed(!isCollapsed)}
        />

        {/* Mobile navbar */}
        <Menu setIsCollapsed={setIsCollapsed} isCollapsed={isCollapsed} user={user} />
      </div>
    </header>
  );
};

export default Header;
