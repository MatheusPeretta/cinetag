import Banner from 'components/Banner';
import styles from './Favoritos.module.css'
import Titulo from 'components/Titulo';
import { useFavoritoContexto } from 'contextos/Favoritos';
import Card from 'components/Card';


function Favoritos() {

    const {favorito} = useFavoritoContexto()
    return ( 
        <>
            <Banner imagem="Favoritos" />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {favorito.map((fav)=>{
                    return <Card {...fav} key={fav.id}/>
                })}
            </section>

        </>
     );
}

export default Favoritos;
