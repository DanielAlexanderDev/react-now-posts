import { ChangeEvent, MouseEvent, useRef, useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'

import PostItem from '@/components/PostItem'
import { usePosts } from '@/hooks/usePosts'
import { useUserInfo } from '@/context/userContext'
import { createPost, deletePosts } from '@/api/fetchPosts'
import { RocketSVG } from '@/icons/utils'

export const toastOptions = {
  loading: {
    duration: 10000,
    className: 'bg-[#22272E] text-gray-400',
  },
  success: {
    className: 'bg-green-500 text-white',
  },
  error: {
    className: 'bg-red-500 text-white',
  },
}

export const Feed = () => {
  const [postContent, setPostContent] = useState('')
  const [disableButton, setDisableButton] = useState(true)
  const textarea = useRef<HTMLTextAreaElement>(null)

  const { userInfo } = useUserInfo()
  const { posts, setPosts } = usePosts()

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const el = textarea.current
    setPostContent(e.target.value)
    if (
      e.target.value.length > 250 ||
      e.target.value.length == 0 ||
      e.target.value.trim() == ''
    ) {
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

  const handleSumbit = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault()
    toast.promise(
      createPost(
        {
          author: `${userInfo?.name} ${userInfo?.lastName}`,
          authorId: userInfo?._id,
          content: postContent,
        },
        (data) => {
          setPosts([data, ...posts])
        }
      ),
      {
        loading: 'Loading...',
        success: 'Post created!',
        error: 'Failed to post, try later.',
      }
    )

    if (textarea.current) {
      textarea.current.value = ''
      textarea.current.style.height = 'auto'
    }
  }
  const handleDelete = async (id: string) => {
    await deletePosts(id, () => {
      const newPosts = posts.filter((post) => post._id != id)
      console.log(newPosts)
      setPosts(newPosts)
    })
  }

  return (
    <>
      <Toaster position="bottom-center" toastOptions={toastOptions} />
      <main className=" flex justify-center min-h-[91vh] py-4 bg-[#22272E]">
        <section className="w-1/3 flex flex-col justify-items-start items-center">
          <div className="w-full min-w-[350px] flex-col flex bg-gray-700 h-auto p-4 rounded-sm mb-12">
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
            <div className="flex items-center justify-between mt-4">
              <button
                type="submit"
                onClick={handleSumbit}
                disabled={disableButton}
                className=" text-cyan-400 text-sm flex items-center gap-x-1 bg-gray-800 px-2 py-2 rounded-md disabled:bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-400 hover:bg-gray-900 "
              >
                Publicar
                <RocketSVG size="1.3em" />
              </button>
              <p className="font-light text-sm text-gray-300">
                {postContent.length}/250
              </p>
            </div>
          </div>
          <div className="w-full min-w-[350px] flex flex-col gap-y-2 divide-y divide-gray-700 border border-gray-700">
            {posts.map((post, idx) => {
              return (
                <PostItem key={idx} {...post} handleDelete={handleDelete} />
              )
            })}
          </div>
        </section>
      </main>
    </>
  )
}
