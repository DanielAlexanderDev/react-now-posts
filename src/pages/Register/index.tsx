import InputField from '@/components/InputField'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import ilustration from '../../space.svg'
import { HidePassSVG, ShowPassSVG } from '@/icons/utils'

const Register = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [toggleType, setToggleType] = useState<'password' | 'text'>('password')
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name
    setFormData((prev) => ({
      ...prev,
      [name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    fetch('http://localhost:3001/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
  }

  return (
    <main className=" min-h-[75vh] md:h-[92vh]  md:flex items-center justify-center bg-zinc-100 m-0 p-0">
      <div className="z-10 md:w-1/2 flex flex-col items-center justify-center h-full">
        <div>
          <h2 className="text-center mb-6 font-extrabold md:text-6xl lg:text-8xl text-5xl m-12">
            Register
          </h2>
          <h2 className="text-center mb-6 font-thin text-gray-400 md:text-6xl lg:text-8xl text-5xl ">
            now
          </h2>
        </div>
        {/* Form  */}
        <form onSubmit={handleSubmit} className="m-12  ">
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 mb-6 w-full group">
              <InputField
                autoFocus
                onChange={handleChange}
                type="text"
                name="name"
                required={true}
              >
                First Name
              </InputField>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <InputField
                onChange={handleChange}
                type="text"
                name="lastName"
                required
              >
                Last Name
              </InputField>
            </div>
          </div>
          <div className=" relative z-0 mb-6 w-full group">
            <InputField
              onChange={handleChange}
              type="email"
              name="email"
              required
            >
              Email Address
            </InputField>
          </div>
          <div className="relative z-0 mb-6 w-full group flex items-center">
            <InputField
              onChange={handleChange}
              type={toggleType}
              name="password"
              required
            >
              Password
            </InputField>
            {toggleType == 'password' ? (
              <ShowPassSVG
                onClick={() => setToggleType('text')}
                className="absolute right-0 fill-gray-500 cursor-pointer hover:fill-gray-800"
                size="1.4em"
              />
            ) : (
              <HidePassSVG
                onClick={() => setToggleType('password')}
                className="absolute right-0 fill-gray-800 cursor-pointer"
                size="1.4em"
              />
            )}
          </div>

          {errorMessage && (
            <span className="flex  bg-red-400 px-4 py-1 rounded-md  my-2 ">
              {errorMessage}
            </span>
          )}
          {successMessage && (
            <span className=" flex bg-green-300 px-4 py-1 rounded-md">
              {successMessage}
              <NavLink to={'/login'} className="font-bold underline">
                Log In
              </NavLink>
            </span>
          )}
          <div className="flex flex-col w-full">
            <button
              onSubmit={handleSubmit}
              type="submit"
              className={`text-white bg-zinc-600 hover:bg-zinc-700 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-1/2 px-5 py-2.5 text-center `}
            >
              Submit
            </button>
            <NavLink className="group" to={'/login'}>
              <span className="text-xs underline">
                I already have an account.
              </span>
            </NavLink>
          </div>
        </form>
      </div>
      <div className=" lg:w-1/2 2xl:bg-zinc-600 h-full flex items-center justify-center">
        <img
          src={ilustration}
          className={
            'lg:w-[80%] lg:min-w-[70%] hidden lg:block  lg:opacity-100 p-5'
          }
          alt=""
        />
      </div>
    </main>
  )
}

export default Register
