import reactLogo from '../../assets/react.svg'
import "./Header.css"
const Header = () =>{
    return(
        <div className='logo-container'>
            <img src={reactLogo} alt="react-logo" className='react-log' />
        </div>
    )
}

export default Header;