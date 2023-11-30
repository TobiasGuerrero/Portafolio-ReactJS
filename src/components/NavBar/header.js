import React, { useState, useEffect, useRef } from 'react';
import './header.css';

const NavBar = () => {
    const sobreMiRef = useRef(null);
    const proyectosRef = useRef(null);
    const contactosRef = useRef(null);
    const [seccionActual, setSeccionActual] = useState('');

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        console.log(sobreMiRef.current.offsetTop)
        console.log(proyectosRef.current.offsetTop)
        console.log(contactosRef.current.offsetTop)
        console.log(scrollPosition)

        if (sobreMiRef.current && proyectosRef.current && contactosRef.current) {
            if (scrollPosition === 0 || scrollPosition < 300 ){
                setSeccionActual('sobreMi');
            } else if (scrollPosition >= 300 && scrollPosition < 1000){
                setSeccionActual('proyectos');
            } else{
                setSeccionActual('contactos');
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Usa las referencias según sea necesario en el futuro

    return (
        <header className={`header en-${seccionActual}`}>
            <a href="/"><h1 className="header__h1">Tobias Guerrero</h1></a>
            <h3 className="header__h3">Desarrollador Full-Stack</h3>
            <p className="header__p">Creador de páginas web accesibles, diseño responsive y optimizadas.</p>
            <ul className="header__ul">
                <li className="header__li"><a className={seccionActual === 'sobreMi' ? 'header__a header__a--activo' : 'header__a'} href="#sobreMi" ref={sobreMiRef}><span className={seccionActual === 'sobreMi' ? 'header__span header__span--activo' : 'header__span'}></span>Sobre mi</a></li>
                <li className="header__li"><a className={seccionActual === 'proyectos' ? 'header__a header__a--activo' : 'header__a'} href="#proyectos" ref={proyectosRef}><span className={seccionActual === 'proyectos' ? 'header__span header__span--activo' : 'header__span'}></span>Proyectos</a></li>
                <li className="header__li"><a className={seccionActual === 'contactos' ? 'header__a header__a--activo' : 'header__a'} href="#contactos" ref={contactosRef}><span className={seccionActual === 'contactos' ? 'header__span header__span--activo' : 'header__span'}></span>Datos de contacto</a></li>
            </ul>
        </header>
    );
};

export default NavBar;
