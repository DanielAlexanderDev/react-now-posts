import { ButtonHTMLAttributes } from 'react'
import { Link, useNavigate } from 'react-router-dom'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

function DropDownButton({ text, ...props }: Props) {
  const navigate = useNavigate()
  return (
    <li>
      <button
        className="block w-full py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
        {...props}
      >
        {text}
      </button>
    </li>
  )
}
export default DropDownButton
