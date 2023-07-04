import { PostInterface } from '@/types/types'
import { useUserInfo } from '@/context/userContext'
import { Link } from 'react-router-dom'
import { FavButton } from './FavButton'
import { DeleteSVG } from '@/icons/utils'
import { useState } from 'react'
import { toast } from 'react-hot-toast'

interface PostItemInterface extends PostInterface {
  handleDelete: (id: string) => Promise<void>
}

function PostItem({
  author,
  content,
  authorId,
  _id,
  handleDelete,
}: PostItemInterface) {
  const { userInfo } = useUserInfo()
  const [likes, setLikes] = useState(Math.floor(Math.random() * 15))
  const notify = () => {
    toast.promise(handleDelete(_id) as Promise<unknown>, {
      loading: 'Loading',
      success: 'Succesfully deleted',
      error: ' There was an error',
    })
  }
  const [liked, setLiked] = useState(false)

  return (
    <div className="flex gap-x-2 w-full p-3  text-white">
      <img
        className="w-10 h-10  rounded-full "
        src="/src/default_profile_400x400.png"
        alt="avatar picture"
      />
      <div className="w-full flex">
        <div className="w-full flex flex-col justify-items-start items-start">
          <h3 className=" font-bold text-base">
            <Link to={`/profile/${authorId}`}>{author}</Link>{' '}
          </h3>
          <p className=" font-light text-sm ">{content}</p>
        </div>
        <div className="flex flex-col justify-center items-end">
          {userInfo?._id == authorId ? (
            <button onClick={notify}>
              <DeleteSVG
                size="1em"
                className="fill-gray-500/80 hover:fill-red-400 justify-end"
              />
            </button>
          ) : null}
          <FavButton
            liked={liked}
            likes={likes}
            onClick={() => {
              setLiked(!liked)
              if(liked){
                setLikes(likes -1)
              }else {
                setLikes(likes +1)
              }
            }}
          />
        </div>
      </div>
    </div>
  )
}
export default PostItem
