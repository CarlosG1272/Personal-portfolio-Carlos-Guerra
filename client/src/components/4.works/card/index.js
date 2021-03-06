import styles from "./index.module.scss";
import Tags from "./tags";
import React, { useState } from "react";
import { useRef } from "react";


export default function Card({proyect}){
    // Pasarle las direcciones de la imágenes y las tecnologías
    let img = useRef(null)
    let reference2 = useRef(null)
    let reference3 = useRef(null)
    let reference4 = useRef(null)
    let reference5 = useRef(null)

    const [timer, setTimer] = useState([])
    const animation =  (e) => {
        if (e.type === "mouseenter") {       
            let element =  setTimeout(() => {
                img.current.id = styles.hidden
                reference2.current.id= styles.img2
            }, 500);
            
            let element2 = setTimeout(()=> {
                reference3.current.id = styles.bgstyle
                reference4.current.id = styles.tags
                reference5.current.id = styles.title
            }, 1500)

            setTimer(prev=> [...prev, element, element2 ])
            console.log(timer)
        } else {
            clearTimeout(timer[0])
            clearTimeout(timer[1])
            setTimer([])
            img.current.id = styles.img
            reference2.current.id= styles.hidden
            reference3.current.id = styles.hidden
            reference4.current.id = styles.hidden
            reference5.current.id = styles.hidden
        }
        
    }

    return(
    <a href={proyect.deploy} target="_blank" rel="noreferrer" className={styles.container} onMouseLeave={()=>animation("remove")}>
        <div className={styles.containerIMG} onMouseEnter={animation} onMouseLeave={animation} >
                <div id={styles.description}>
                    <div id={styles.hidden} ref={reference5}>{proyect.name}</div>
                    <div id={styles.hidden} ref={reference4}>
                    {proyect.technologies.map(el=> {
                        return <Tags name={el}/>
                    })}
                </div>
            </div>

            <div id={styles.hidden} ref={reference3}></div>

            <img id={styles.img} src={require(`../../../assets/works/${proyect.path}/1.PNG`)}
            alt="workIMG" ref={img} />
            <img id={styles.hidden} className={styles.image2} src={require(`../../../assets/works/${proyect.path}/2.PNG`)} 
            alt="workIMG" ref={reference2}/> 
        </div>
    </a>)
}


// onMouseOver={this.onToggleOpen}y onMouseOut={this.onToggleOpen}