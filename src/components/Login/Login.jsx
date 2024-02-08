import { auth, provider } from "../../services/firebase";


const Login = () => {
    const handleSignin = () => {
        auth.signInWithPopup(provider).catch(alert);
    };

    return(

        <div className="flex  h-[100vh] items-center justify-center">
            <button className="bg-slate-300 text-sm  cursor-pointer rounded" onClick={handleSignin}>Login Com Gloogle</button>

        </div>

    )

}

export default Login;