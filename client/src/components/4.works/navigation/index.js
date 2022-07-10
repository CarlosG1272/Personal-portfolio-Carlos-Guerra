import styles from './navigation.module.scss'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navigation({type}) {
  // Por defecto aparecera en mi front
  const [activate, setActive] = useState({
    front: true,
    back: false,
    full: false,
  })

  const comprobate = ()=> {
    if (type) {
      if(type === "Back-end") {
        setActive({back: true})
      } else if (type === "Front-end"){
        setActive({front: true})
      } else if (type === "Full_Stack"){
        setActive({full: true})
      } 
    }
  }

  useEffect(()=> {
    comprobate()
  }, [type])
 
  


  const handleClick = (e) => {
    setActive((prev) => ({ [e.target.name]: !prev[e.target.name] }))
  }

  return (
    <section className={styles.container}>
      <nav id={styles.nav}>
        <Link to={"/works/Front-end"}>
        <button onClick={handleClick}
        className = {activate.front ? styles.buttonA:styles.buttonD}
        id={activate.front ? styles.raiseA:styles.raise}
        name="front">
          FRONT-END
        </button>
        </Link>

        <Link to={"/works/Back-end"}>
        <button onClick={handleClick} 
        className = {activate.back ? styles.buttonA:styles.buttonD}
        id={activate.back ? styles.raiseA:styles.raise}
        name="back">
          BACK-END
        </button>
        </Link>

        <Link to={"/works/Full_Stack"}>
        <button onClick={handleClick} 
        className = {activate.full ? styles.buttonA:styles.buttonD}
        id={activate.full ? styles.raiseA:styles.raise}
        name="full">
          FULL STACK
        </button>
        </Link>

      </nav>

    </section>
  )
}
