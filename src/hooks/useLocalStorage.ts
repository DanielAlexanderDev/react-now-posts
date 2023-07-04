import { useEffect, useState } from 'react'
import { PostInterface } from '../types/types'
import { v4 as uuidv4 } from 'uuid'

export const useLocalStorage = (storageName: string) => {
  const initialValue: PostInterface = {
    _id: uuidv4(),
    content: 'Title 1',
    author: 'Myself',
    authorId: '5sdqw22asd5',
    date: new Date('June 17, 1997'),
  }
  const [item, setItem] = useState<PostInterface[]>([initialValue])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    console.log(item)
    setLoading(true)
    setTimeout(() => {
      try {
        const localStorageItem = window.localStorage.getItem(storageName)
        console.log(localStorageItem)
        let parsedItem

        if (!localStorageItem) {
          window.localStorage.setItem(
            storageName,
            JSON.stringify([initialValue])
          )
          parsedItem = initialValue
        } else {
          parsedItem = JSON.parse(localStorageItem)
          setItem(parsedItem)
        }
      } catch (error: any) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }, 500)
  }, [])

  const saveItem = (newNote: PostInterface[]) => {
    try {
      const stringifiedNote = JSON.stringify(newNote)
      window.localStorage.setItem(storageName, stringifiedNote)
      setItem(newNote)
    } catch (error: any) {
      setError(error)
    }
  }

  return { item, saveItem, loading, error }
}
