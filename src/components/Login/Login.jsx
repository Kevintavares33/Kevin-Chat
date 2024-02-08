import { auth, provider } from "../../services/firebase";


const Login = () => {
    const handleSignin = () => {
        auth.signInWithPopup(provider).catch(alert);
    };

    return(

        <div className="flex  h-[100vh] items-center justify-center">
         <button className="bg-purple-700 text-lg text-white cursor-pointer rounded" onClick={handleSignin}>Faça o Login com sua Conta do Google!</button>
        </div>

    )

}

export default Login;