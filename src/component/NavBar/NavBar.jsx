import './NavBar.css'
import CardWidget from '../CardWidget/CardWidget'

const NavBar = () => {
    
    const img = "https://www.gcumotorsport.com.ar/images/gcumotorsport-logo.jpeg"

    return (

        <header className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <img src= {img} alt="logo" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <nav className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            Nuestro taller
                        </li>
                        <li className="nav-item">
                            Herramientas
                        </li>
                        <li className="nav-item">
                            Servicios
                        </li>
                        <li className="nav-item">
                            Ubicacion
                        </li>
                    </ul>
                </nav>
                <CardWidget/>
            </div>
        </header>


    )
}

export default NavBar