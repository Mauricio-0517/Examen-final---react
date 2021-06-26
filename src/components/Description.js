import React from 'react';
import './styles/Description.css';
import fondo_foto from '../images/foto-perfil.png'
import foto from '../images/foto.png'

export default function algo() { 
    return(
            <>
                <img src={fondo_foto} alt="fondo" className="fondo_foto" />
                <img src={foto} alt="fondo" className="foto" />
                <div className="texto">
                    <p id="nombre">Yarriba Castro</p>
                    <p id="puesto">Design Track</p>
                    <p id="descripcion">I chose design track because I love to design beautiful user-centered interfaces.</p>
                </div>
            </>
    );
}