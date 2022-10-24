import InputField from "@/components/InputField";
import { useState } from "react";

const Create = () => {
  const [charNumber, setCharNumber] = useState(0);
  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <div className="w-1/3 h-auto ">
        <InputField type="text" name="title" placeholder=" " required>
          Title
        </InputField>
        <label htmlFor="create-blog"></label>
        <textarea
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setCharNumber(e.target.value.length)
          }
          name="create-blog"
          id="blog"
          maxLength={250}
          rows={20}
          placeholder="Type your blog"
          className={"border-gray-400 border my-3 w-full h-auto"}
        />
        {`${charNumber} /250`}
      </div>
    </div>
  );
};
export default Create;
