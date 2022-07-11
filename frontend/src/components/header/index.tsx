import Logo from '../../assets/img/logo.svg';
import './style.css';
function Header() {
    return (
        <>
            <header>
                <div className="dsmeta-logo-container">
                    <img src={Logo} alt="dsmeta"/>
                        <h1>DSMeta</h1>
                        <p>Desenvolvido por <a target="_blank"
                            href="https://www.instagram.com/danielrsbernardo/">@danielrsbernardo</a>
                        </p>
                </div>
            </header>
        </>
    )

}

export default Header;
