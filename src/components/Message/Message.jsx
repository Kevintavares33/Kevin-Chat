

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebase";

const Message = ({ user, message }) => {
  const [userLoggedIn] = useAuthState(auth);

  return (
    <div>
      <div className={`flex ${userLoggedIn?.email === user ? "justify-end" : ""} m-2`}>
        <div className="bg-white rounded-lg shadow p-3 max-w-80">
          <p className="text-sm">{message.message}</p>
          <p className="text-xs text-gray-500 text-right">{new Date(message?.timestamp).toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
