import React from "react";
import Description from "./description/index";
import Skills from "./skills/index";
import styles from "./index.module.scss";
import {motion} from "framer-motion"

export default function About(){
    return(
    <motion.section 
    className={styles.container}
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{x: window.innerWidth, transition: {duration: 0.5}}}
    >
        <div className={styles.description}>
             <Description /> 
        </div>

        <div className={styles.skills}>
             <Skills /> 
        </div> 
    </motion.section>)
}