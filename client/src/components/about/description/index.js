import styles from "./index.module.scss";

export default function Description(){
    return(<div className={styles.container}>
        <div className={styles.question}>
            <h1 >Who is Carlos Guerra?</h1>
        </div>
        <div className={styles.description}>
            <p>
            I am a Full-Stack web developer. I have a great passion for programming and problem solving through critical thinking and mathematics.
            </p>

            <p>
            I enjoy learning constantly, and the most exciting thing is to challenge myself every day by testing everything I learn.
            Besides being a student of Electrical and Electronic Engineering combining my passion for technology and formal sciences.
            </p>

            <p>
            Single person and without family burden, just a young man in love with technology and interested in working on very ambitious projects that allow me to continue learning and require me to give the best of me.
            </p>
        </div>  
    </div>)
}