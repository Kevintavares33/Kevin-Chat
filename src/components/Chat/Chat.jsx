import ChatBody from "../ChatBody/ChatBody";
import ChatFooter from "../ChatFooter/ChatFooter";
import ChatHeader from "../ChatHeader/ChatHeader";
import Default from "../Default/Default";

// eslint-disable-next-line react/prop-types
const Chat = ({userChat}) => {
 if (!userChat) return <Default />;
  return (
    <div className=" flex flex-col w-full">
         <ChatHeader photoURL={userChat?.photoURL} name={userChat?.name} />
         <ChatBody chatId={userChat?.chatId} />
         <ChatFooter chatId={userChat?.chatId} />
    </div>
  )
}

export default Chat