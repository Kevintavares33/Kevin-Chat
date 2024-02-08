import { useEffect, useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import './App.css';
import Chat from './components/Chat/Chat';
import Loading from "./components/Loading/Loading";
import Login from "./components/Login/Login";
import Sidebar from './components/Sidebar/Sidebar';
import { auth, db } from "./services/firebase";

function App() {
  const [user, loading] = useAuthState(auth);
  const [userChat, setUserChat] = useState(null);

  useEffect(() => {
    if (user) {
      db.collection("users").doc(user.uid).set({
        email: user.email,
        photoURL: user.photoURL,
      });
    }
  }, [user]);

  if (loading) return <Loading />;

  if (!user) return <Login />;
  return (
    <div className='flex w-full h-screen'>
     <Sidebar setUserChat={setUserChat} userChat={userChat} />
     <Chat userChat={userChat} />
    </div>
  )
}

export default App
