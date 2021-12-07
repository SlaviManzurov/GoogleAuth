import './Header.css'
import AuthContext from "../contexts/AuthContext";
import { useContext } from 'react'

function Header() {

    const { username } = useContext(AuthContext)
    // console.log(username);

    return (
        <div className='header'>
            <h3 className='headerUser'>{username}</h3>
        </div>
    )
}

export default Header;