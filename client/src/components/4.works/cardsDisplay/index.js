import React from "react";
import Card from "../card";
import styles from "./display.module.scss"; 

export default function CardDisplay({proyects}){
    return(
        <section className={styles.container}>
            {proyects.map(p=> <Card proyect={p}/>)}
        </section>)
}