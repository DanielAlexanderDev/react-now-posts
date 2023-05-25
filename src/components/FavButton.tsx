import { FavFillSVG, FavSVG } from '@/icons/utils'
interface FavProps {
  liked: boolean
  likes: number
  onClick: () => void
}

export const FavButton = ({ liked, likes, onClick }: FavProps) => {
  return (
    <button
    onClick={onClick}
      className={`${
        liked ? 'text-cyan-400' : 'text-gray-400 hover:text-cyan-400'
      } flex gap-x-1 items-center text-xs  pt-2`}
    >
      {liked ? (
        <FavFillSVG size="1.2em" className="fill-current" />
      ) : (
        <FavSVG size="1.2em" className="fill-current" />
      )}
      {likes}
    </button>
  )
}
