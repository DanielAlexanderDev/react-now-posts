import { CreatePost, PostInterface } from '@/types/types'

const BASE_POSTS_URL = 'http://localhost:3001/api/v1/posts'

export const getPosts = () => {
  return fetch(BASE_POSTS_URL)
}

export const getUserPosts = (authorId: string) => {
  return fetch(`${BASE_POSTS_URL}?author=${authorId}`)
}

/**
 * Send a POST Request with validated data, if the request has a succesfull response, execute the callback sending the data information.
 * @param body Data to submit.
 * @param cb Callback thought for manage state in frontend without re-fetch posts, it sends data information received in a succesfull reponse.
 */
export const createPost = async (
  body: CreatePost,
  cb: (data: PostInterface) => void
) => {
  const res = await fetch(BASE_POSTS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  const data = await res.json()

  if (res.ok) {
    cb(data)
  }
}

/**
 * Send a DELETE Request with the respective id, if the request has a succesfull response, execute the callback thought to updtae state of posts without re-fetching.
 * @param id Post id to delete.
 * @param cb Callback thought for manage state in frontend without re-fetch posts.
 */
export const deletePosts = async (id: string, cb: () => void) => {
  const res = await fetch(`http://localhost:3001/api/v1/posts/${id}`, {
    method: 'DELETE',
  })
  const data = await res.json()

  if (res.ok) {
    cb()
  }
}
