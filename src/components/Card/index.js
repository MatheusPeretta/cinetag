import { useFavoritoContexto } from 'contextos/Favoritos';
import styles from './Card.module.css'
import iconeFavoritar from './favoritar.png'
import iconeDesfavorito from './desfavoritar.png'
import { Link } from 'react-router-dom';


function Card({id, titulo, capa}) {

    const{favorito, adicionarFav} = useFavoritoContexto()
    const ehFavorito = favorito.some((fav)=>fav.id===id)
    const icone = !ehFavorito ? iconeFavoritar : iconeDesfavorito
    return ( 
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={capa} alt={titulo} className={styles.capa} />
                <h2>{titulo}</h2>
            </Link>
            <img src={icone} alt='Favoritar filme' className={styles.favoritar}
            onClick={()=>{
                adicionarFav({id,titulo,capa})
            }} />
        </div>
     );
}

export default Card;
