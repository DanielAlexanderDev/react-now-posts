import { PostInterface } from '@/types/types'

function PostItem({ author, content }: PostInterface) {
  return (
    <div className="flex gap-x-2 w-full p-3  text-white">
      <img
        className="w-10 h-10  rounded-full "
        src="/src/default_profile_400x400.png"
        alt="avatar picture"
      />
      <div className="w-auto">
        <div>
          <h3 className=" font-bold text-base">{author}</h3>
        </div>
        <p className=" font-light text-sm ">{content}</p>
      </div>
    </div>
  )
}
export default PostItem
