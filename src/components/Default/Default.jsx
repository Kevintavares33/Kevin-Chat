import { MdMessage } from "react-icons/md";

const Default = () => {
  return (
    <div className=" flex flex-col items-center justify-center w-full bg-stone-100 p-5 gap-5">
        <MdMessage className="w-24 h-24 text-purple-700 " />
      <h1 className="text-3xl font-bold text-indigo-900">Kevin Chat</h1>
      <span className="text-lg text-center max-w-md text-indigo-500">O seu Chat Gratis!</span>

    </div>
  )
}

export default Default