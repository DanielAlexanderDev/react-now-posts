import { SVGAttributes } from 'react'

export interface PostInterface {
  _id: string
  author: string
  authorId: string
  content: string
  date: Date
}
export interface UserInterface {
  name: string
  lastName: string
  email: string
  _id: string
  password: string
  createdAt: string
}

export type RegisterInterface = Pick<UserInterface, 'email' | 'password'>
export type PublicUserInterface = Omit<UserInterface, 'password'>

export interface IconProps extends SVGAttributes<SVGElement> {
  size?: string
  color?: string
}

export type CreatePost = {
  author: string
  authorId: string | undefined
  content: string
}
