import './Header.scss';
import logo from '../../assets/images/logo.png';
import Toggle from '../Toggle/Toggle';

function Header() {
    return (
        <header className="header container">
            <div className="wide container">
                <div className="header-logo">
                    <img src={logo} alt="" />
                </div>
                <nav className="header-nav">
                    <a href="">Home</a>
                    <a href="" className="active">
                        Users
                    </a>
                    <a href="">Blogs</a>
                    <a href="">Service</a>
                    <a href="">Contact</a>
                </nav>
                <Toggle />
            </div>
        </header>
    );
}

export default Header;
