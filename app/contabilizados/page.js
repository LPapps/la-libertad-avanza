import Styles from './page.module.css';
import Nav from '../componentes/Nav';
export default function Contabilidazos(){
// simulando fetch de votos
const votos = {
    total: 352246,
    milei: 20420,
    massa: NaN,
    enBlanco: 313,
    anulados: 356,
}
    return(<div className={Styles.contenedor}>
        <Nav />
        <h1>VOTOS CONTABILIZADOS</h1>
        <h1>{votos.total}</h1>
        <h2>VOTOS ESCRUTADOS</h2>
        <div className={Styles.row}>
            <h2>La libertad avanza</h2>
            <h2>{votos.milei}</h2>
        </div>
        <div className={Styles.row}>
            <h2>Unión por la patria</h2>
            <h2>{votos.massa}</h2>
        </div>
        <div className={Styles.row}>
            <h2>Votos en blanco</h2>
            <h2>{votos.enBlanco}</h2>
        </div>
        <div className={Styles.row}>
            <h2>Votos anulados</h2>
            <h2>{votos.anulados}</h2>
        </div>
        </div>)
}