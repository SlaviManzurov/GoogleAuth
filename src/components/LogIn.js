import { useHistory } from 'react-router-dom'
import { authentication } from '../firebase/firebase';
import { signInWithPopup, GoogleAuthProvider} from "firebase/auth";


function LogIn() {

    let history = useHistory()
    const SignInWithFirebase = () => {
        const provider = new GoogleAuthProvider();

        signInWithPopup(authentication, provider)
        .then((res) => {
            // console.log(res.user.displayName)
            history.push('/gallery')
        })
        .catch((err) => {
        console.log(err);
        })
    }
    return (
        <div>
            <button onClick={SignInWithFirebase}>Login</button>
        </div>
    )
}
export default LogIn;