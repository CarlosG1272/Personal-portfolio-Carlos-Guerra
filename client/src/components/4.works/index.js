import Navigation from "./navigation";
import styles from "./works.module.scss"
import CardDisplay from "./cardsDisplay";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { full_stack } from "../../data/full-stack";
import { back_end } from "../../data/backend";
import { front_end } from "../../data/frontend";

export default function Works(){
    // Para saber que resultado mostrar, front - back o full
    const [data, setData] = useState([]); 
    let params = useParams();
    useEffect(()=> {
        if(params.type === 'Back-end') setData(back_end)
        else if (params.type === 'Front-end') setData(front_end)
        else setData(full_stack)
    },[params.type])
    return(
    <section className={styles.container}>
        <h2 id={styles.title}>WEB DEVELOPER PORFOLIO</h2>
        <div id={styles.navBar}><Navigation type={params.type}/></div>

        <div id={styles.cardDisplay}><CardDisplay proyects={data}/></div>     
    </section>)
}