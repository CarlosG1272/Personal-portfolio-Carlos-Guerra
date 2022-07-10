import React from "react";
import Description from "./description/index";
import Skills from "./skills/index";
import styles from "./index.module.scss";

export default function About(){
    return(
    <section className={styles.container}>
        <div className={styles.description}>
             <Description /> 
        </div>

        <div className={styles.skills}>
             <Skills /> 
        </div> 
    </section>)
}