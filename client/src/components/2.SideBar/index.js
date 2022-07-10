import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './index.module.scss'
import { faAddressBook, faBriefcase, faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons'

export default function Sidebar(){
    return(
    <div className={styles.navBar}>
        <nav>
            <NavLink exact="true" activeClassName={styles.active} to='/'>
                <FontAwesomeIcon icon={faHome} color="#99FFFF"/>
            </NavLink>

            <NavLink exact="true" activeClassName={styles.active} to='/about' 
            className={styles.about}>
                <FontAwesomeIcon icon={faAddressBook} color="#99FFFF"/>
            </NavLink>

            <NavLink exact="true" activeClassName={styles.active} to='/works/Front-end' 
            className={styles.works}>
                <FontAwesomeIcon icon={faBriefcase} color="#99FFFF"/>
            </NavLink>

            <NavLink exact="true" activeClassName={styles.active} to='/contact' 
            className={styles.contact}>
                <FontAwesomeIcon icon={faEnvelope} color="#99FFFF"/>
            </NavLink>
        </nav>
    </div>)
}