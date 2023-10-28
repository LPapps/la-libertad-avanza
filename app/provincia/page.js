import Styles from './page.module.css';
import Card from '../componentes/Card';
import Nav from '../componentes/Nav';
import { provincias } from '../componentes/data.js'

export default function Distrito(){
    // simulando ingreso de datos


    return(<div className={Styles.contenedor}>
        <Nav />
        <h1>VOTOS POR PROVINCIA</h1>
        {provincias.map((distrito)=>{
            return(<Card nombre={distrito.nombre} total={distrito.total} votos={distrito.votos} />)
        })}
    </div>)
}