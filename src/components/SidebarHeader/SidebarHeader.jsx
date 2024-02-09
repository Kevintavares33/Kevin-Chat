/* eslint-disable no-undef */
import * as EmailValidator from "email-validator";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { MdChat, MdDonutLarge, MdMoreVert } from "react-icons/md";
import { auth, db } from "../../services/firebase";

// eslint-disable-next-line react/prop-types
const SidebarHeader = ({ setUserChat }) => {
  const [user] = useAuthState(auth);
  const refChat = db
    .collection("chats")
    .where("users", "array-contains", user.email);
  const [chatsSnapshot] = useCollection(refChat);

  const handleCreateChat = () => {
    const emailInput = prompt("Escreva o e-mail desejado");

    if (!emailInput) return;

    if (!EmailValidator.validate(emailInput)) {
      return alert("E-mail inválido!");
    } else if (emailInput === user.email) {
      return alert("Insira um e-mail diferente do seu!");
    } else if (chatExists(emailInput)) {
      return alert("Chat já existe!");
    }

    db.collection("chats").add({
      users: [user.email, emailInput],
    });
  };

  const chatExists = (emailChat) => {
    return !!chatsSnapshot?.docs.find(
      (chat) => chat.data().users.find((user) => user === emailChat)?.length > 0
    );
  };
  
  return (
    
    <div className=" flex h-14 bg-purple-100 px-4 mb-1 justify-between items-center shadow-sm"> 
      <img className=" w-10 h-10 cursor-pointer rounded-[50%] " 
      src={user?.photoURL}onClick={() => [auth.signOut(), setUserChat(null)]} 
      />
    
     <div className="flex  gap-2.5">
     <MdDonutLarge className=" w-6 h-6 stroke-purple-700 cursor-pointer "/>
        <MdChat onClick={handleCreateChat} className=" w-6 h-6 stroke-purple-700  cursor-pointer " />
        <MdMoreVert className=" w-6 h-6 cursor-pointer stroke-purple-700 " />
     </div>

    </div>
  )
}

export default SidebarHeader;