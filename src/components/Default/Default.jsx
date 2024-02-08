import { MdMessage } from "react-icons/md";

const Default = () => {
  return (
    <div className=" flex flex-col items-center justify-center w-full bg-[#f8f8f8] p-5 gap-5">
        <MdMessage className="w-24 h-24 text-violet-500" />
      <h1 className="text-3xl font-bold">Chat App</h1>
      <span className="text-lg text-center max-w-md">este e o chat do kevin.</span>

    </div>
  )
}

export default Default