import React from "react";
import ParticlesBG from "../particlesBG/particle";
import styles from "./landing.module.css";


export default function LandingPage(){
    
    return(<div className={styles.container}> 
        <section id={styles.ParticlesBG}>
            <ParticlesBG />
        </section>

        <section id={styles.description}>
            <h1 id={styles.title}>HI! I am Carlos Guerra</h1>
            <p id={styles.description}>A full stack web developer</p>
        </section>
    </div>)
}