import React from "react";
import './styles.css';
import { Link } from "react-router-dom";
import Logo from '../../assets/batmanlogo-removebg-preview.png';

function Header () {

    return (
        <header>
            <img id="logo" src={Logo}/>
            <nav>
                <ul>
                    <Link style={{textDecoration:'none'}} to='/'>
                        <li>Home</li>
                    </Link>
                    
                    <Link style={{textDecoration:'none'}} to='/contato'>
                        <li>Contato</li>
                    </Link>

                    <Link style={{textDecoration:'none'}} to='/comentarios'>
                        <li>Comentários</li>
                    </Link>
                    
                    <Link style={{textDecoration:'none'}} to='/fotos'>
                        <li>Fotos</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}



export default Header;