import SidebarChats from '../SidebarChats/SidebarChats';
import SidebarHeader from '../SidebarHeader/SidebarHeader';


// eslint-disable-next-line react/prop-types
const Sidebar = ({ setUserChat, userChat }) => {
    return (
      <div className='w-1/3 max-w-96 border-r-2 border-solid border-[#ddd] h-screen'>
        <SidebarHeader setUserChat={setUserChat} />
        <SidebarChats setUserChat={setUserChat} userChat={userChat} />
      </div>
    );
  };
  
  export default Sidebar;