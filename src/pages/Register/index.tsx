import InputField from "@/components/InputField";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
  const [pass, setPass] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    if (isConfirmed) {
      e.preventDefault();
      fetch("http://localhost:3001/api/v1/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          lastName: lastName,
          email: email,
          password: pass,
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPass(e.target.value);
  };
  const checkPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === pass && e.target.value !== "") {
      setIsConfirmed(true);
    } else {
      setIsConfirmed(false);
    }
  };

  return (
    <div className=" h-[75vh] px-2 flex flex-col md:flex-row justify-center  items-center">
      <div className="md:border-r-2">
        <h2 className="text-center mb-6 font-extrabold md:text-6xl lg:text-8xl text-5xl m-12">
          Register
        </h2>
        <h2 className="text-center mb-6 font-thin text-gray-400 md:text-6xl lg:text-8xl text-5xl ">
          now
        </h2>
      </div>

      {/* Form  */}
      <form onSubmit={handleSubmit} className="m-12">
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 mb-6 w-full group">
            <InputField
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
              type="text"
              name="first_name"
              placeholder=" "
              required={true}
            >
              First Name
            </InputField>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <InputField
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setLastName(e.target.value)
              }
              type="text"
              name="last_name"
              placeholder=" "
              required
            >
              Last Name
            </InputField>
          </div>
        </div>
        <div className=" relative z-0 mb-6 w-full group">
          <InputField
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            type="email"
            name="email"
            placeholder=" "
            required
          >
            Email Address
          </InputField>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <InputField
            onChange={handleOnChange}
            type="password"
            name="password"
            placeholder=" "
            required
          >
            Password
          </InputField>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <InputField
            type="password"
            name="repeat_password"
            placeholder=" "
            onChange={checkPassword}
            required
          >
            Confirm Password
          </InputField>
        </div>
        <div className="flex flex-col w-full">
          <button
            onSubmit={handleSubmit}
            type="submit"
            disabled={!isConfirmed}
            className={`text-white ${
              isConfirmed
                ? "bg-blue-700 hover:bg-blue-800"
                : "bg-gray-300 cursor-not-allowed"
            }    focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-1/2 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
          >
            Submit
          </button>
          <NavLink className="group" to={"/login"}>
            <span className="text-xs underline">
              I already have an account.
            </span>
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Register;
