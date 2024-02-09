import { FaCode } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { auth, provider } from "../../services/firebase";

const Login = () => {
    const handleSignin = () => {
        auth.signInWithPopup(provider).catch(alert);
    };

    return (
        
        <div className="flex colum  items-center justify-center w-full h-screen bg-background bg-cover  font-serif">
          
          <a href="https://portfolio-kevintavares33.vercel.app/">
          <h3 className="w-20 h-20 absolute top-0 left-0 mt-10  ml-[10px] text-neutral-300 font-mono ">KevinDev</h3>
          <FaCode  className="w-20 h-10 absolute top-0 left-0 mt-8 ml-[70px] text-purple-700"></FaCode >
          </a>

            <div className=" relative w-80 h-72 bg-transparent border-violet-100 border-2 items-center justify-center shadow-xl">
                  <h1 className="relative text-4xl mt-[60px] ml-[55px] font-bold text-neutral-200 items-center  ">Bem Vindo</h1>
                  
                  <button className="w-[200px] h-10 rounded mt-[50px] ml-[60px] text-neutral-300 bg-purple-700 items-center justify-center text-sm cursor-pointer "
                  onClick={handleSignin}> Login com  Google  </button>
                  
                  <a href="https://portfolio-kevintavares33.vercel.app/" className="cursor-pointer">
                  
                  <h3 className="ml-[100px] mt-[30px] text-neutral-200 font-bold "> Kevin Chat </h3>
                  <MdMessage className=" flex w-8 h-8 text-purple-700 ml-[200px] mt-[-24px]  cursor-pointer " />
                  
                  </a> 
            </div> 
            
          
        </div>
      );
      

}

export default Login;