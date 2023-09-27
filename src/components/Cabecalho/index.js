import { Link } from "react-router-dom";
import logo from '../../imagens/Logo-cinetag-branco 1.png'
import styles from './Cabecalho.module.css'
import CabecalhoLink from "../CabecalhoLink";

function Cabecalho() {
    return ( 
        <header className={styles.cabecalho}>
            <Link to='./'>
                <img src={logo} alt="logo Cinetag" />
            </Link>
            <nav>
                <CabecalhoLink url='./'>Home</CabecalhoLink>
                <CabecalhoLink url='./Favoritos'>Favoritos</CabecalhoLink>
            </nav>
        </header>
     );
}

export default Cabecalho;
