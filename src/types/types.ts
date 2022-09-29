export interface NoteInterface {
  id: string;
  title: string;
  description: string;
  author: string;
  date: Date;
}
export interface UserInterface {
  name: string;
  lastName: string;
  email: string;
  password: string;
  createdAt: Date;
}
