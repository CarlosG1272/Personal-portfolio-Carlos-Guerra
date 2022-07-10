import styles from "./tags.module.scss"
export default function Tags({name}){
    return(
    <div className={styles.container}>
        {name}
    </div>)
}