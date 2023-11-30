import "./Main.css"
import React, { useEffect, useState } from "react";
import obtenerProyectos from "../../services/airtable/Airtable";
import Item from "../Item/Item";
import Loader from "../Loader/Loader";

const Main = () => {
    const [proyectos, setProyectos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const proyectosData = await obtenerProyectos();
                proyectosData.sort((a, b) => parseInt(a.id) - parseInt(b.id));
                setProyectos(proyectosData);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <main className="main">
            <section id="sobreMi" className="sobremi">
                <h3 className="main__h3">Sobre mi</h3>
                <p className="main__p">Me recibí como técnico aeronáutico en la escuela técnica N°8 Jorge Newbery (2013 - 2020), estudié programación en la UTN (2021 - 2022) y después en CoderHouse como desarrollador Full-Stack (2022 - 2023). Tengo sólidos conocimientos en HTML, CSS, SASS, Git/GitHub, JavaScript, ReactJS y Node.js.</p>
                <p className="main__p">Me gusta mucho programar y soy una persona que no se rinde fácilmente. Si no entiendo algo, no paro hasta aprenderlo por mi cuenta. Aunque aún no tengo un trabajo fijo, sigo desarrollando proyectos por cuenta propia.</p>
            </section>
            <section id="proyectos" className="proyectos">
                <h3 className="main__h3">Proyectos</h3>
                {loading ? (
                    <Loader />
                ) : (
                    <ul className="main__ul">
                        {proyectos.map(proyecto => (
                            <Item key={proyecto.nombre} {...proyecto} />
                        ))}
                    </ul>
                )}
            </section>
        </main>
    );
};

export default Main;