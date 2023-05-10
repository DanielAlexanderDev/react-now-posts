import { useUserInfo } from '@/context/userContext'

const Profile = () => {
  const { userInfo } = useUserInfo()
  const fullName = `${userInfo?.name} ${userInfo?.lastName}`

  return (
    <main className="min-h-[91vh] bg-[#22272E] py-10">
      <div className="container m-auto flex flex-col lg:flex-row justify-center items-center lg:justify-around lg:items-start p-3">
        {/* User info*/}
        <section className=" flex flex-col justify-center items-center gap-4 mb-10 lg:mb-0">
          <img
            className="w-32 h-32 lg:w-48 lg:h-48 rounded-full "
            src="src/default_profile_400x400.png"
            alt="avatar picture"
          />
          <div className="text-center">
            <p className="text-2xl font-semibold text-white ">{fullName}</p>
            <p className="text-sm font-light text-gray-400 ">
              {userInfo?.email}
            </p>
            <p className="text-gray-400">Posts: 8</p>
          </div>
        </section>
        {/* Post Section*/}
        <section className="flex flex-col max-w-[700px] text-white lg:border-l lg:min-h-[50vh]  lg:border-gray-400 pl-6">
          <div className=" flex gap-x-2  py-3 ">
            <img
              className="w-12 h-12 bg-slate-600 rounded-full "
              src="src/default_profile_400x400.png"
              alt="avatar picture"
            />
            <div>
              <h3 className=" font-bold text-base">{fullName}</h3>
              <p className=" font-light text-sm ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Maiores nesciunt possimus repellat sed are dicta animi
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
export default Profile
