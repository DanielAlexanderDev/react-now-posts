import { useContext, FC } from "react";
import { Link } from "react-router-dom";
import { authContext } from "@/context/authContext";
import NavItem from "./NavItem";
import UserAuthMenu from "./UserAuthMenu";
import NotAuthMenu from "./NotAuthMenu";

const Header: FC = () => {
  const { isAuth } = useContext(authContext);

  return (
    <nav className="bg-zinc-800  px-3 sm:px-4 py-2.5 md:h-[8vh]  text-gray-200">
      <div className="container flex justify-between items-center mx-auto">
        <Link to={"/"} className="flex items-center">
          <h1 className="text-3xl font-regular  text-gray-300 whitespace-nowrap  px-2">
            now
          </h1>
        </Link>
        <div
          className="hidden justify-between items-center w-full md:flex md:w-auto "
          id="mobile-menu-2"
        >
          <ul className="flex flex-col justify-center items-center p-4 mt-4 rounded-lg border border-gray-100 text-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:border-gray-700">
            <NavItem path="/explore">Browse</NavItem>
            <NavItem path="#">Following</NavItem>
            <NavItem path="/about">About</NavItem>
          </ul>
        </div>
        {isAuth ? <UserAuthMenu /> : <NotAuthMenu />}
      </div>
    </nav>
  );
};

export default Header;
