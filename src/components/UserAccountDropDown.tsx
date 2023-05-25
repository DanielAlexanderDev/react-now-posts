import { useUserInfo } from '@/context/userContext'
import { useNavigate } from 'react-router-dom'
import DropDownButton from './DropDownButton'
import { useAuth } from '@/hooks/useAuth'

interface Props {
  show: boolean
  closeModal: () => void
}

function UserAccountDropDown({ show, closeModal }: Props) {
  const navigate = useNavigate()
  const { removeAuth } = useAuth()
  const { userInfo } = useUserInfo()
  const fullName = `${userInfo?.name} ${userInfo?.lastName}`

  return (
    <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg focus:outline-none">
      <div
        className={`${
          show ? 'block' : 'hidden'
        }  text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 `}
        id="user-dropdown"
        tabIndex={1}
      >
        <div className="py-3 px-4">
          <span className="block text-sm text-gray-900 dark:text-white">
            {fullName}
          </span>
          <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
            {userInfo?.email}
          </span>
        </div>
        <ul className="pt-1" aria-labelledby="user-menu-button">
          <DropDownButton
            text="Profile"
            onClick={() => {
              navigate(`/profile/${userInfo?._id}`)
              closeModal()
            }}
          />
          <DropDownButton
            text="Settings"
            onClick={() => {
              navigate('/settings')
              closeModal()
            }}
          />
          <li>
            <button
              className="block w-full py-2 px-4 text-sm text-gray-700 bg-gray-100 hover:bg-gray-300 "
              onClick={() => {
                removeAuth()
                navigate('/login')
              }}
            >
              Log out
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default UserAccountDropDown
