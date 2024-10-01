import React from "react";
import './styles.css'
import Logo from '../../assets/batmanlogo-removebg-preview.png';
import { Link } from 'react-router-dom';

function Footer  () {
    return (
        <footer>
            <img styles="object-fit: contain;" id="logo" src={Logo}/>
            <span>Todos os direitos reservados ©</span>
            <span>Desenvolvido por : Nicolas Santana</span>

            <nav className="footer-navegation">
                <ul className="footer-list">
                    <Link style={{textDecoration:'none'}} to='/'>
                        <li>Home</li>
                    </Link>
                    
                    <Link style={{textDecoration:'none'}} to='/contato'>
                        <li>Contato</li>
                    </Link>

                    <Link style={{textDecoration:'none'}} to='/fotos'>
                        <li>Fotos</li>
                    </Link>
                    
                    <Link style={{textDecoration:'none'}} to='/contato'>
                        <li>Comentários</li>
                    </Link>
                </ul>
            </nav>
            
        </footer>
    )
}

export default Footer;