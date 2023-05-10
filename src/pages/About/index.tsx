export const About = () => {
  return (
    <main className=" bg-[#22272E] m-auto py-2">
      <section className="text-white max-w-[900px] w-full m-auto p-4 divide-y">
        <article className="text-left  flex flex-col gap-6">
          <h2 className="text-center font-extrabold text-2xl">INTRODUCTION</h2>
          <p>
            NOW is platform where you can publish and share posts. All you need
            to do is:
          </p>
          <ul className=" list-disc list-inside px-4">
            <li>Create an account with your email.</li>
            <li>Log into your account.</li>
            <li>Publish your post inside the feed page.</li>
          </ul>
          <p>
            This is a project app, created by{' '}
            <a
              className="font-bold underline"
              href="https://github.com/DanielAlexanderDev"
              target="_blank"
            >
              me
            </a>{' '}
            in order to apply some tech knowledge. I suggest the user to use the
            application for the sole purpose of testing its operation.
          </p>
        </article>
        <article className="text-left  flex flex-col gap-4 mt-8 pt-5">
          <h2 className="font-bold text-2xl text-center">DEVELOPMENT</h2>
          <p>
            NOW is a full stack application, developed under the MERN Stack.{' '}
          </p>
          <h3 className="font-semibold text-lg">Front End Technologies</h3>
          <ul className="list-disc list-inside px-4 underline">
            <li>
              <a
                className=" hover:text-blue-400"
                href="https://react.dev/"
                target="_blank"
              >
                React
              </a>
            </li>
            <li>
              <a
                className=" hover:text-blue-400"
                href="https://www.typescriptlang.org/"
                target="_blank"
              >
                Typescript
              </a>
            </li>
            <li>
              <a
                className=" hover:text-blue-400"
                href="https://tailwindcss.com/"
                target="_blank"
              >
                Tailwind
              </a>
            </li>
            <li>
              <a
                className=" hover:text-blue-400"
                href="https://reactrouter.com/en/main"
                target="_blank"
              >
                React Router Dom
              </a>
            </li>
          </ul>
          <h3 className="font-semibold text-lg">Back End Technologies</h3>
          <ul className="list-disc list-inside px-4 underline">
            <li>
              <a
                className=" hover:text-blue-400"
                href="https://expressjs.com/"
                target="_blank"
              >
                Express Js
              </a>
            </li>
            <li>
              <a
                className=" hover:text-blue-400"
                href="https://nodejs.org/en"
                target="_blank"
              >
                Node.js
              </a>
            </li>
            <li>
              <a
                className=" hover:text-blue-400"
                href="https://mongoosejs.com/"
                target="_blank"
              >
                Mongoose
              </a>
            </li>
            <li>
              <a
                className=" hover:text-blue-400"
                href="https://jwt.io/"
                target="_blank"
              >
                JWT
              </a>
            </li>
          </ul>
          <h3 className="font-semibold text-lg">Database</h3>
          <ul className="list-disc list-inside px-4 underline">
            <li>
              <a
                className=" hover:text-blue-400"
                href="https://www.mongodb.com/atlas/database"
                target="_blank"
              >
                MongoDB Atlas
              </a>
            </li>
          </ul>
          <p>
            You can find the code follwing the{' '}
            <a
              className=" underline hover:text-blue-500"
              href="https://github.com/DanielAlexanderDev/react-now-posts"
              target="_blank"
            >
              link
            </a>
            .
          </p>
        </article>
      </section>
    </main>
  )
}
