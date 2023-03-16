import { Link } from "react-router-dom";

interface Props {
  path: string;
  text: string;
}

function DropDownButton({ path, text }: Props) {
  return (
    <li>
      <Link
        to={path}
        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
      >
        {text}
      </Link>
    </li>
  );
}
export default DropDownButton;
