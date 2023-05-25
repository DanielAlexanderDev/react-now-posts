import { useState } from 'react'
import UserAccountDropDown from './UserAccountDropDown'
import { UserCircleSVG } from '@/icons/utils'

function UserAuthMenu() {
  const [showModal, setShowModal] = useState<boolean>(false)

  const closeModal = () => {
    setShowModal(false)
  }
  return (
    <>
      <div className="flex justify-center  items-center">
        <div className="relative inline-block text-left">
          <div>
            <button
              type="button"
              className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 hover:bg-slate-600 focus:ring-2 focus:ring-gray-500 "
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
              onClick={() => {
                setShowModal(!showModal)
              }}
            >
              <UserCircleSVG size="1.5em" className="fill-current" />
            </button>
            {/* <!-- Dropdown menu --> */}
            <UserAccountDropDown show={showModal} closeModal={closeModal} />
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
    </>
  )
}
export default UserAuthMenu
