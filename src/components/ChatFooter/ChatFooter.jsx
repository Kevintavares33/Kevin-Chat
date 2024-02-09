import firebase from "firebase/compat/app";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { IoMdSend } from "react-icons/io";
import { auth, db } from "../../services/firebase";

const ChatFooter = ({ chatId }) => {
  const [user] = useAuthState(auth);
  const [message, setMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();

    db.collection("chats")
      .doc(chatId)
      .collection("messages")
      .add({
        message: message,
        user: user.email,
        photoURL: user.photoURL,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });

    setMessage("");
  };

  return (
    <div className="h-16 bg-purple-100  bottom-0 w-full flex items-center px-4 shadow-md">
      <form className="w-full flex items-center" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Mensagem"
          className="px-4 py-2 flex-1 rounded-full border border-gray-300 focus:outline-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit"  className="ml-2 p-2 rounded-full bg-purple-500  border-white  text-white hover:bg-Violet-800 focus:outline-none">
        <IoMdSend className="w-4 h-4" /> 
        </button>
      </form>
    </div>
  );
};

export default ChatFooter;
