import { useState, useContext } from "react";
import InputField from "@/components/InputField";
import { authContext } from "@/context/authContext";
import { userContext } from "@/context/userContext";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState<string>("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { activateAuth } = useContext(authContext);
  const { getUserInfo, userInfo } = useContext(userContext);

  const formValue = {
    email: email,
    password: password,
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    fetch("http://localhost:3001/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValue),
    })
      .then((res) => res.json())
      .then((data) => {
        activateAuth(data.token);
        console.log(userInfo);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className=" h-[75vh] px-2 flex flex-col md:flex-row justify-center  items-center">
      <div className="md:border-r-2 ">
        <h2 className="text-center mb-6 font-extrabold md:text-6xl lg:text-8xl text-5xl m-12">
          Login
        </h2>
        <h2 className="text-center mb-6 font-thin text-gray-400 md:text-6xl lg:text-8xl text-5xl ">
          now
        </h2>
      </div>
      <form onSubmit={handleSubmit} className="m-12 flex flex-col">
        <div className="relative z-0 mb-6 w-full group">
          <InputField
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            type="email"
            name="email"
            placeholder=" "
            required
          >
            Email
          </InputField>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <InputField
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            type="password"
            name="password"
            placeholder=" "
            required
          >
            Password
          </InputField>
        </div>
        <button
          onSubmit={handleSubmit}
          type="submit"
          className={`text-white bg-zinc-600 hover:bg-zinc-700    focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
        >
          LogIn
        </button>
        <NavLink to={"/register"}>
          <span className=" text-xs underline">I don't have an account.</span>
        </NavLink>
      </form>
    </div>
  );
};
export default Login;
