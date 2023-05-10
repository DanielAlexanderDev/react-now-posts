import { ChangeEvent, useRef, useState } from 'react'

import PostItem from '@/components/PostItem'
import { usePosts } from '@/hooks/usePosts'

export const Feed = () => {
  const [postContent, setPostContent] = useState('')
  const [disableButton, setDisableButton] = useState(true)
  const textarea = useRef<HTMLTextAreaElement>(null)
  const { posts } = usePosts()

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const el = textarea.current
    setPostContent(e.target.value)
    if (e.target.value.length > 250 || e.target.value.length == 0) {
      setDisableButton(true)
    } else {
      setDisableButton(false)
    }
    if (el) {
      el.style.height = '0px'
      const scrollHeight = el.scrollHeight
      el.style.height = scrollHeight + 'px'
    }
  }

  return (
    <main className=" flex flex-col justify-center items-center py-4 bg-[#22272E] ">
      <div className="w-1/3 min-w-[360px] flex-col flex bg-white h-auto p-4 rounded-sm mb-12">
        <textarea
          ref={textarea}
          onChange={handleChange}
          placeholder="Que estas pensando?"
          className=" resize-none focus:outline-none w-full bg-gray-100 text-gray-500 tracking-wide  h-auto p-2 rounded-md"
          name=""
          value={postContent}
          rows={1}
          autoFocus
          id=""
        />
        <div className="flex items-center justify-between p-2">
          <button
            onClick={(e) => {
              if (textarea.current) {
                textarea.current.value = ''
                textarea.current.style.height = 'auto'
              }
            }}
            disabled={disableButton}
            className=" text-white text-sm  bg-gray-700 px-2 py-1 rounded-md disabled:bg-gray-200 disabled:cursor-not-allowed"
          >
            Publicar
          </button>
          <p className="font-light text-sm">{postContent.length}/250</p>
        </div>
      </div>
      <div className="w-1/3 min-w-[360px] divide-y divide-gray-600">
        {posts.map((post, idx) => {
          return <PostItem key={idx} {...post} />
        })}
      </div>
    </main>
  )
}
