import Styles from './Nav.module.css';
import Link from 'next/link';

export default function Nav(){
    return(<div className={Styles.nav}>
        <Link href='/' className={Styles.link}>Inicio</Link>
        </div>)}