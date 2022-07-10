import Navigation from "./navigation";
import styles from "./works.module.scss"
import CardDisplay from "./cardsDisplay";
import { useParams } from "react-router-dom";
export default function Works(){
    // Para saber que resultado mostrar, front - back o full
    let params = useParams();
    return(
    <section className={styles.container}>
        <h2 id={styles.title}>WEB DEVELOPER PORFOLIO</h2>

        <div id={styles.navBar}><Navigation type={params.type}/></div>

        <div id={styles.cardDisplay}><CardDisplay /></div>     
    </section>)
}