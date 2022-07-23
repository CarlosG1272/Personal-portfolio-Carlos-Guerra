import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './index.module.scss'
import { faAddressBook, faBriefcase, faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons'

export default function Sidebar(){
    const location = window.location.pathname.includes("/works"); 
    return(
    <div className={styles.navBar}>
        <nav>{console.log(location)}
            <NavLink exact="true" className={({isActive})=> isActive ? styles.active:styles.inactive} to='/'>
                <FontAwesomeIcon icon={faHome} color="#99FFFF"/>
            </NavLink>

            <NavLink exact="true" className={({isActive})=> isActive ? styles.active:styles.inactive} to='/about' 
            id={styles.about}>
                <FontAwesomeIcon icon={faAddressBook} color="#99FFFF"/>
            </NavLink>

            <NavLink exact="true" className={location ? styles.active:styles.inactive} to='/works/Front-end' 
            id={styles.works}>
                <FontAwesomeIcon icon={faBriefcase} color="#99FFFF"/>
            </NavLink>

            <NavLink exact="true" className={({isActive})=> isActive ? styles.active:styles.inactive} to='/contact' 
            id={styles.contact}>
                <FontAwesomeIcon icon={faEnvelope} color="#99FFFF"/>
            </NavLink>
        </nav>
    </div>)
}