import Acquista from './acquista.jsx';

const Navbar = ({ titolo, immagine }) => {
    return (
        <nav className="navbar bg-dark navbar-dark"> {/* Rimuovi "d-flex" qui, è già flessibile di default */}
            <div className="container-fluid">
                {/* Logo + Titolo (allineati a sinistra) */}
                <div className="d-flex align-items-center">
                    <img 
                        src={immagine} 
                        className="img-fluid me-2" 
                        style={{ width: "30px", height: "30px" }} 
                        alt="Logo" 
                    />
                    <span className="navbar-brand mb-0 h1">{titolo}</span>
                </div>

                {/* Pulsante Acquista (spinto a destra con ms-auto) */}
                <div className="ms-auto">
                    <Acquista />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;