import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from "../../services/firebase";
import SidebarChatsItem from "../SidebarChatsItem/SidebarChatsItem";


const SidebarChats = ({ setUserChat, userChat }) => {
  const [user] = useAuthState(auth);

  const refChat = db
    .collection("chats")
    .where("users", "array-contains", user.email);

  const [chatsSnapshot] = useCollection(refChat);

      return (
        <div className="h-[calc(100vh-70px)] overflow-y-auto scrollbar-thumb rounded-md scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {chatsSnapshot?.docs.map((item, index) => (
            <div key={index}>
              <SidebarChatsItem
                id={item.id}
                users={item.data().users}
                user={user}
                setUserChat={setUserChat}
                // eslint-disable-next-line react/prop-types
                active={userChat?.chatId === item.id ? "active" : ""}
              />
              <div className="mx-10 border-t  border-gray-300"></div>
            </div>
          ))}
        </div>
      );
  
}
export default SidebarChats;