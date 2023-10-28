import Styles from './page.module.css';
import Link from 'next/link';

export default function Home(){
  return(<div className={Styles.contenedor}>
    <div className={Styles.logo}>
      <h1>LA LIBERTAD</h1>
      <h1>AVANZA</h1>
    </div>
    <Link className={Styles.boton} href="/contabilizados">VOTOS CONTABILIZADOS</Link>
    <Link className={Styles.boton} href="/provincia">VOTOS POR PROVINCIA</Link>
    <Link className={Styles.boton} href="/distrito">VOTOS POR DISTRITO</Link>
    <Link className={Styles.boton} href="/alerta">ALERTA DE FRAUDE</Link>
    </div>)
};