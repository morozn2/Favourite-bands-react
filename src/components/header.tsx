import "./header.css"

function Header() {
    return (
        <>
            <header>
                <div className="logo-and-name">
                    <img src="logo.png" alt="" className='logo' />
                    <h1 className="site-name-header">Abyssal Regurgitations</h1>
                    <img src="logo.png" alt="" className='logo' />
                </div>
                <ul className="navigation-header">
                    <li><a href="">История</a></li>
                    <li><a href="">Контакты</a></li>
                    <li><a href="">ЧаВо</a></li>
                </ul>
            </header>
        </>
    )
}

export default Header