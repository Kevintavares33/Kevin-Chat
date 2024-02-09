

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebase";

const Message = ({ user, message }) => {
  const [userLoggedIn] = useAuthState(auth);

  return (
    <div>
      <div className={`flex ${userLoggedIn?.email === user ? "justify-end" : ""} m-2`}>
        <div className="bg-purple-200  rounded-lg shadow p-3 max-w-80">
          <p className="text-base text-purple-900 font-sans font-semibold   ">{message.message}</p>
          <p className="text-[9px] text-purple-300 text-right">{new Date(message?.timestamp).toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
