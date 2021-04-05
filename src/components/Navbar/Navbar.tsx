import React from "react";
import {NavLink} from "react-router-dom";

import styles from './Navbar.module.scss';

const Navbar = () => {
    return (
        <nav className={'navbar-wrapper'}>
            <div className={styles.NavbarButton}>
                <NavLink to={'./reports'}>Отчеты и графики</NavLink>
            </div>
            <div className={styles.NavbarButton}>
                <NavLink to={'./estimates'}>Входящие сметы</NavLink>
            </div>
            <div className={styles.NavbarButton}>
                <NavLink to={'./paymentCards'}>Карточки оплат</NavLink>
            </div>
            <div className={styles.NavbarButton}>
                <NavLink to={'./archiveCards'}>Архив карточек</NavLink>
            </div>
            <div className={styles.NavbarButton}>
                <NavLink to={'./counterparties'}>Контрагенты</NavLink>
            </div>
            <div className={styles.NavbarButton}>
                <NavLink to={'./changeHistory'}>История изменений</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;