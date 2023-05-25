import { useState, useEffect } from 'react'

import { getPosts } from '@/api/fetchPosts'
import { PostInterface } from '@/types/types'

export const usePosts = () => {
  const [posts, setPosts] = useState<PostInterface[]>([])
  useEffect(() => {
    getPosts()
      .then((response) => response.json())
      .then((data) => {
        setPosts(data)
      })
  }, [])
  return { posts, setPosts }
}
