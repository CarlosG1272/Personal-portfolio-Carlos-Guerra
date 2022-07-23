import React from "react";
import ParticlesBG from "../particlesBG/particle";
import styles from "./landing.module.scss";
import Animation from "./LogoAnimation";
import {motion} from "framer-motion"

export default function LandingPage(){
    
    return(
    <motion.div 
    className={styles.container}
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{x: window.innerWidth, transition: {duration: 1}}}
    > 
        <section id={styles.ParticlesBG}>
            <ParticlesBG />
        </section>

        <section id={styles.description}>
            <div>
                 <h1 id={styles.title}>HI! I'm Carlos Guerra</h1>
            </div>
            <div>
                <p id={styles.description}>A full stack web developer available to get started on ambitious new projects.</p>
            </div>
        </section>

        <section>
            <Animation/>
        </section>
    </motion.div>)
}