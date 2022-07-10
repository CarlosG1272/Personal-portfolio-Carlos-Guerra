import styles from "./index.module.scss";
import Tags from "./tags";
import React from "react";
import { useRef } from "react";
// Le tengo que poner el mismo nombre del IMAGEN LOKO CRJO
import pc from "../../../assets/works/pc.jpg"
import S from "../../../assets/works/S.jpg"

export default function Card({img1, img2, tecnologys}){
    // Pasarle las direcciones de la imágenes y las tecnologías
    let img = useRef(null)
    let reference2 = useRef(null)
    let reference3 = useRef(null)
    let reference4 = useRef(null)
    let reference5 = useRef(null)

    const animation =  (caso) => {
        if (caso === "hover") {        
            var value1 = setTimeout(() => {
                img.current.id = styles.hidden
                reference2.current.id= styles.img2
            }, 1000);

            var value2 = setTimeout(()=> {
                reference3.current.id = styles.bgstyle
                reference4.current.id = styles.tags
                reference5.current.id = styles.title
            }, 500)
        } else {
            clearTimeout(value2)
            clearTimeout(value1)
            img.current.id = styles.img
            reference2.current.id= styles.hidden
            reference3.current.id = styles.hidden
            reference4.current.id = styles.hidden
            reference5.current.id = styles.hidden
        }
        
    }

    const reset = ()=>{
        img.current.id = styles.img
        reference2.current.id= styles.hidden
        reference3.current.id = styles.hidden
        reference4.current.id = styles.hidden
        reference5.current.id = styles.hidden
    }

    const prueba = ["React", "JavaScript", "Redux", "SCSS"]
    return(
    <div className={styles.container} onMouseLeave={()=>animation("remove")}>
        <div className={styles.containerIMG} onMouseOver={()=>animation("hover")} >
                <div id={styles.description}>
                    <div id={styles.hidden} ref={reference5}>DOG APP</div>
                    <div id={styles.hidden} ref={reference4}>
                    {prueba.map(el=> {
                        return <Tags name={el}/>
                    })}
                </div>
            </div>

            <div id={styles.hidden} ref={reference3}></div>

            <img id={styles.img} src={pc}
            alt="workIMG" ref={img} />
            <img id={styles.hidden} src={require("../../../assets/works/S.jpg")} 
            alt="workIMG" ref={reference2}/> 
        </div>
    </div>)
}


// onMouseOver={this.onToggleOpen}y onMouseOut={this.onToggleOpen}