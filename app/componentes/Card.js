import Styles from './Card.module.css';

export default function Card({nombre,votos,total}){

    const porcentaje = Math.round(votos * 100 / total);

    return(<div className={Styles.card}>
        <h2>{nombre}</h2>
        <h3>Mesas escrutadas:</h3>
        <h2>{porcentaje}%</h2>
    </div>)
}