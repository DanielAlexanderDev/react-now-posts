import { deletePosts, getUserPosts } from '@/api/fetchPosts'
import PostItem from '@/components/PostItem'
import { useUserInfo } from '@/context/userContext'
import { PostInterface } from '@/types/types'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {
  const [userPosts, setUserPosts] = useState<PostInterface[]>([])
  const params = useParams()
  const id = params.id

  const { userInfo } = useUserInfo()
  const fullName = `${userInfo?.name} ${userInfo?.lastName}`

  useEffect(() => {
    getUserPosts(id as string)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setUserPosts(data)
      })
  }, [])
  const handleDelete = async (id: string) => {
    await deletePosts(id, () => {
      const newPosts = userPosts.filter((post) => post._id != id)
      console.log(newPosts)
      setUserPosts(newPosts)
    })
  }
  return (
    <main className="min-h-[91vh] bg-[#22272E] py-10">
      <div className="container m-auto flex flex-col lg:flex-row justify-center items-center lg:justify-around lg:items-start p-3">
        {/* User info*/}
        <section className=" flex flex-col justify-center items-center gap-4 mb-10 lg:mb-0">
          <img
            className="w-32 h-32 lg:w-48 lg:h-48 rounded-full "
            src="/src/default_profile_400x400.png"
            alt="avatar picture"
          />
          <div className="text-center">
            <p className="text-2xl font-semibold text-white ">{fullName}</p>
            <p className="text-sm font-light text-gray-400 ">
              {userInfo?.email}
            </p>
            <p className="text-gray-400">Posts: {userPosts.length}</p>
          </div>
        </section>
        {/* Post Section*/}
        <section className="flex flex-col w-full max-w-[700px] divide-y divide-gray-700 gap-y-2  text-white lg:border-l lg:min-h-[50vh]  lg:border-gray-700 lg:pl-6">
          {userPosts?.map((post) => {
            return (
              <PostItem key={post._id} {...post} handleDelete={handleDelete} />
            )
          })}
        </section>
      </div>
    </main>
  )
}
export default Profile
