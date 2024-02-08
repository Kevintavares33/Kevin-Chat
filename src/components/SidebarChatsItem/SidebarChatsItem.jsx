import { useCollection } from "react-firebase-hooks/firestore";
import { MdPerson } from "react-icons/md";
import { db } from "../../services/firebase";

const getUser = (users, userLogged) =>
  users?.filter((user) => user !== userLogged?.email)[0];

const SidebarChatsItem = ({ id, users, user, setUserChat, active }) => {
  const [getUserItem] = useCollection(
    db.collection("users").where("email", "==", getUser(users, user))
  );

  const Avatar = getUserItem?.docs?.[0]?.data();
  const item = getUser(users, user);

  const handleNewChat = () => {
    const userChat = {
      chatId: id,
      name: item.split("@")[0],
      photoURL: Avatar?.photoURL,
    };

    setUserChat(userChat);
  };

  return (
    <div
      className={`flex items-center  border-gray-300 border- justify-start px-4 py-3 cursor-pointer hover:bg-purple-300 active:bg-gray-100 ${
        active ? 'bg-gray-100' : ''
      }`}
      onClick={handleNewChat}
    >
      {Avatar ? (
        <img
          src={Avatar?.photoURL}
          alt="Avatar"
          className="w-8 h-8 rounded-full mr-3 min-w-max"
        />
      ) : (
        <MdPerson className="w-8 h-8 rounded-full mr-3 min-w-max bg-slate-200" />
      )}
      <span className="text-base overflow-hidden overflow-ellipsis">
        {item.split("@")[0]}
      </span>
    </div>
  );
};

export default SidebarChatsItem;