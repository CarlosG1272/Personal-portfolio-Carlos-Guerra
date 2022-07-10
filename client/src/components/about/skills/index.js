
import { faCode, faDatabase, faBrain } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import styles from './index.module.scss'

export default function Skills() {
  const front = ["HTML", "CSS", "JavaScript", "JQuery", "REACT", "REDUX", "TypeScript", "Sass", "Less", "BootStrap"]
  const back = ["PostgreSQL", "SQLite", "Express", "NodeJS"]
  const aditional = ["NPM", "GIT","MatLab"]
  return (
    <section className={styles.container}>
      <h1>SKILLS</h1>
      <article className={styles.information_container}>
        <p>
          For several months I dedicated myself to learn web development in
          which I developed full-stack responsive web applications that have
          many functionalities and are user friendly.
        </p>
        <p>
          I try to create my own algorithms and functions avoiding to use too
          many libraries.
        </p>
      </article>
      <article className={styles.box_container}>
        <section id={styles.box1}>
            <div className={styles.header}>
                <div>
                    <FontAwesomeIcon icon={faCode} color="#FFFF00" size="6x" />
                </div>
                <div><h2>FRONT-END</h2></div>
            </div>
          
            <ul>
              {front.map(el=> 
                <li>
                  {el}
                  <img 
                    src={require(`../../../assets/${el}.png`)}
                    width="50"
                    height="50"
                    alt={el}
                  />
                </li>)
              }
            </ul>

          <Link to={"/works/Front-end"}>
            <button className={styles.button} id={styles.type3}>See Front-end Proyects</button>
          </Link>
        </section>

        <section id={styles.box2}>
            <div className={styles.header}>
                <div>
                    <FontAwesomeIcon icon={faDatabase} color="#FFFF00" size="6x" />
                </div>
                <div><h2>BACK-END</h2></div>
            </div>

            <ul>
              {back.map(el=> 
                <li>
                  {el}
                  <img 
                    src={require(`../../../assets/${el}.png`)}
                    width="50"
                    height="50"
                    alt={el}
                  />
                </li>)}
            </ul>
            <Link to={"/works/Back-end"}>
            <button className={styles.button} id={styles.type3}>See Back-end Proyects</button>
            </Link>
        </section>

        <section id={styles.box3}>
           <div className={styles.header}>
                <div>
                    <FontAwesomeIcon icon={faBrain} color="#FFFF00" size="6x" />
                </div>
                <div>
                    <h2>PROGRAMMING-FLOWS</h2>
                </div>
          </div>
          <ul>
          {aditional.map(el=> 
              <li>
                {el}
                <img 
                  src={require(`../../../assets/${el}.png`)}
                  width="50"
                  height="50"
                  alt={el}
                />
              </li>)
            }
          </ul>
          <Link to={"/works/Full_Stack"}>
            <button className={styles.button} id={styles.type3}>See Full-Stack Proyects</button>
          </Link>
        </section>
      </article>
    </section>
  )
}
