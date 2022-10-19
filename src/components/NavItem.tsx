import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface NavProps {
  path: string;
  children: ReactNode;
}

const NavItem = ({ path, children }: NavProps) => {
  return (
    <li>
      <Link
        to={path}
        className="block py-2 pr-4 pl-3  rounded  md:hover:bg-transparent hover:text-white md:p-0 text-gray-200  dark:hover:bg-gray-700  md:dark:hover:bg-transparent"
      >
        {children}
      </Link>
    </li>
  );
};
export default NavItem;
