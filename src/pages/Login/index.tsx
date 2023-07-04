import { useState } from 'react'
import { getToken } from '@/api/getToken'
import InputField from '@/components/InputField'
import { useUserInfo } from '@/context/userContext'
import { NavLink } from 'react-router-dom'
import ilustration from '@/illu1.svg'
import { useAuth } from '@/hooks/useAuth'

const Login = () => {
  const [isError, setIsErrr] = useState(false)
  const { activateAuth } = useAuth()
  const { setUser } = useUserInfo()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const email = e.currentTarget.elements.namedItem(
      'email'
    ) as HTMLInputElement
    const password = e.currentTarget.elements.namedItem(
      'password'
    ) as HTMLInputElement
    getToken({ email: email.value, password: password.value })
      .then((res) => res.json())
      .then((data) => {
        activateAuth(data.token)
        setUser(data.user)
        setIsErrr(false)
        console.log(data)
      })
      .catch((error) => setIsErrr(true))
  }

  return (
    <main className=" min-h-[75vh] md:h-[92vh]  md:flex items-center justify-center bg-zinc-100 ">
      <div className="z-10 md:w-1/2 flex flex-col items-center justify-center h-full">
        <div>
          <h2 className="text-center mb-6 font-extrabold md:text-6xl lg:text-8xl text-5xl m-12">
            Login
          </h2>
          <h2 className="text-center mb-6 font-thin text-gray-400 md:text-6xl lg:text-8xl text-5xl">
            now
          </h2>
        </div>
        {isError && (
          <span className=" text-red-500 text-sm">
            Credenciales incorrectas (email o password){' '}
          </span>
        )}
        <form
          onSubmit={handleSubmit}
          className="m-12 flex flex-col z-10 lg:w-1/3"
        >
          <div className="relative z-0 mb-6 w-full group">
            <InputField
              autoFocus
              // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              //   setEmail(e.target.value)
              // }
              type="email"
              name="email"
              required
            >
              Email
            </InputField>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <InputField
              // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              //   setPassword(e.target.value)
              // }
              type="password"
              name="password"
              required
            >
              Password
            </InputField>
          </div>
          <button
            type="submit"
            className={`text-white bg-zinc-600 hover:bg-zinc-700    focus:ring-4 focus:outline-none font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center `}
          >
            LogIn
          </button>
          <NavLink to={'/register'}>
            <span className=" text-xs underline">I don't have an account.</span>
          </NavLink>
        </form>
      </div>
      <div className=" md:w-1/2 2xl:bg-zinc-600 h-full flex items-center justify-center">
        <img
          src={ilustration}
          className={
            'md:w-full md:min-w-[90%] hidden md:block  md:opacity-100 p-5'
          }
          alt="hero image"
        />
      </div>
    </main>
  )
}
export default Login
