import "./Item.css"
import { useState } from "react";

const Item = ({ nombre, foto, descripcion, link }) => {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal)
    }
    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <li className="card">
            <img onClick={toggleModal} src={foto} alt={nombre} className="card__image" />
            <div className="card__content">
                <div className="card__title">{nombre}</div>
                <button onClick={toggleModal} className="card__btn">Ver detalles</button>
                <a href={link} target="_blank" rel="noopener noreferrer"><button className="card__btn">Ver pagina</button></a>
            </div>
            {modal && (
                <div className="item__modal">
                    <div onClick={toggleModal} className="item__modal--overlay"></div>
                    <div className="item__modal--content">
                        <img src={foto} alt={nombre} className="item__modal--img" />
                        <div className="item__modal--descripcion">
                            <h2 className="item__modal--h2">{nombre}</h2>
                            <p className="card__text">{descripcion}</p>
                            <div className="item__modal--btns">
                                <a href={link} target="_blank" rel="noopener noreferrer" className="card__btn card__btn--modal">Ver pagina</a>
                                <button onClick={toggleModal} className="card__btn card__btn--modal">Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </li>
    )
};

export default Item