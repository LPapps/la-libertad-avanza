import Styles from './page.module.css';
import Nav from '../componentes/Nav';


export default function Alerta(){
    return(<div className={Styles.contenedor}>
        <Nav />
        <h1>ALERTA DE FRAUDE</h1>
        <h4>Nombre:</h4>
        <input type="text" placeholder='Juan Perez'/>
        <h4>Contacto:</h4>
        <input type="text" placeholder='3446 455 555'/>
        <h4>Escuela:</h4>
        <input type="text" placeholder='Olegario V. Andrade'/>
        <h4>Mesa:</h4>
        <input type="number" placeholder='1234'/>
        <h4>Detalle:</h4>
        <textarea placeholder='VIVA LA LIBERTAD CARAJO'></textarea> 
        <button>ENVIAR</button>
        </div>)}