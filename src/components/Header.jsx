import './Header.css'
import logo from '../assets/sj19.png'

function Header() {
    return (
        <div className='header'>
            <div className="logo-cont">
                <img src={logo} alt="" />
            </div>
            
        </div>
    )
}

export default Header