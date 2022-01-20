import './Navbar.scss';

export default function Navbar(){
    return (
        <div className="navbar">
            <div className="navbar__Logo">
                <h1>MyLogo</h1>
            </div>
            <div className="navbar__Menu">
                    <ul>
                        <li>Home</li>
                        <li>Hotels</li>
                        <li>Rooms</li>
                        <li>ABout</li>
                        <li>Contact</li>
                        <li className="Connexion">Connexion</li>
                    </ul>
            </div>
        </div>
    )
}