import { MdMoreVert, MdPerson, MdSearch } from "react-icons/md";

// eslint-disable-next-line react/prop-types
const ChatHeader = ({ photoURL, name }) => {
  return (
    <div className="h-14 bg-[#f0f2f5] px-4 flex items-center justify-between shadow-sm z-10">
      <div className="flex items-center">
        {photoURL ? (
          <img src={photoURL} alt="Avatar" className="w-8 h-8 rounded-full mr-2" />
        ) : (
          <MdPerson className="w-8 h-8 rounded-full mr-2" />
        )}
        <span className="text-lg overflow-hidden overflow-ellipsis">{name}</span>
      </div>
      <div className="flex gap-4">
        <MdSearch className="w-6 h-6 text-gray-600 cursor-pointer" />
        <MdMoreVert className="w-6 h-6 text-gray-600 cursor-pointer" />
      </div>
    </div>
  );
};

export default ChatHeader;