import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "@/context/authContext";
import NavItem from "./NavItem";
import { HiPlus } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { removeAuth, isAuth } = useContext(authContext);
  const navigate = useNavigate();
  return (
    <nav className="bg-zinc-800 border-gray-200 px-3 sm:px-4 py-2.5 rounded text-gray-200">
      <div className="container flex  justify-between items-center mx-auto">
        <Link to={"/"} className="flex items-center">
          <h1 className="self-center text-3xl font-regular  text-gray-300 whitespace-nowrap ">
            now
          </h1>
        </Link>
        <div
          className="hidden justify-between items-center w-full md:flex md:w-auto "
          id="mobile-menu-2"
        >
          <ul className="flex flex-col p-4 mt-4 rounded-lg border border-gray-100 text-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:border-gray-700">
            <NavItem path="/explore">Browse</NavItem>
            <NavItem path="#">Following</NavItem>
            <NavItem path="#">About</NavItem>
            <NavItem path="#">Contact</NavItem>
          </ul>
        </div>
        {isAuth ? (
          <div className="flex justify-center  items-center">
            <Link
              to={"/create"}
              className="mx-3 rounded md:hover:bg-transparent font-regular  text-gray-300 md:dark:hover:text-white hover:bg-gray-700 hover:text-white "
            >
              <HiPlus size={"1.4em"} />
            </Link>

            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 hover:bg-slate-600 focus:ring-2 focus:ring-gray-500 "
                  id="user-menu-button"
                  aria-expanded="false"
                  data-dropdown-toggle="user-dropdown"
                  data-dropdown-placement="bottom"
                  onClick={() => setShowModal((prev) => !prev)}
                >
                  <FaUserCircle size={"1.5em"} />
                </button>
              </div>
              {/* <!-- Dropdown menu --> */}
              <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg focus:outline-none">
                <div
                  onBlur={() => setShowModal(false)}
                  className={`${
                    showModal ? "block" : "hidden"
                  }  text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 `}
                  id="user-dropdown"
                >
                  <div className="py-3 px-4">
                    <span className="block text-sm text-gray-900 dark:text-white">
                      Bonnie Green
                    </span>
                    <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                      name@flowbite.com
                    </span>
                  </div>
                  <ul className="py-1" aria-labelledby="user-menu-button">
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Settings
                      </a>
                    </li>

                    <li>
                      {isAuth ? (
                        <button
                          className="block w-full py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                          onClick={() => {
                            setShowModal(false);
                            removeAuth();
                            navigate("/login");
                          }}
                        >
                          Log out
                        </button>
                      ) : (
                        <button
                          className="block w-full py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                          onClick={() => {
                            setShowModal(false);
                            navigate("/login");
                          }}
                        >
                          Log in
                        </button>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-500"
              aria-controls="mobile-menu-2"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        ) : (
          <div>
            <ul className="flex gap-x-2">
              <button className=" bg-slate-300 rounded-md px-3 text-black">
                <Link to={"/login"}>Login</Link>
              </button>
              <span> or </span>
              <button className=" bg-slate-300 rounded-md px-3 text-black">
                <Link to={"/register"}>Register</Link>
              </button>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
