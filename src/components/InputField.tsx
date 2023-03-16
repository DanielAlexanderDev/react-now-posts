import React, { ReactNode } from "react";

interface Props {
  type: string;
  name: string;
  required: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children: ReactNode;
}

const InputField = ({ type, name, required, onChange, children }: Props) => {
  return (
    <>
      <input
        type={type}
        name={name}
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0  peer"
        placeholder=" "
        required={required}
        onChange={onChange}
      />
      <label
        htmlFor={name}
        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {children}
      </label>
    </>
  );
};
export default InputField;
