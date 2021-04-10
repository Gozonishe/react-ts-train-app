import React from "react";
import {NavLink} from "react-router-dom";
import { Button } from 'antd';

import styles from './Navbar.module.scss';
import DropMenuCompany from "./DropMenuCompany/DropMenuCompany";
import DropMenuUnit from "./DropMenuUnit/DropMenuUnit";
import UserProfileContainerModule from "./UserProfileContainer/UserProfileContainer";

const Navbar = () => {
    return (
        <nav className={'navbar-wrapper'}>
            <UserProfileContainerModule/>
            <DropMenuCompany/>
            <DropMenuUnit/>
            <div className={styles.NavbarButton}>
                <Button type="text">
                    <NavLink to={'./reports'}>Отчеты и графики</NavLink>
                </Button>
            </div>
            <div className={styles.NavbarButton}>
                <Button type="text">
                    <NavLink to={'./estimates'}>Входящие сметы</NavLink>
                </Button>
            </div>
            <div className={styles.NavbarButton}>
                <Button type="text">
                    <NavLink to={'./paymentCards'}>Карточки оплат</NavLink>
                </Button>
            </div>
            <div className={styles.NavbarButton}>
                <Button type="text">
                    <NavLink to={'./archiveCards'}>Архив карточек</NavLink>
                </Button>
            </div>
            <div className={styles.NavbarButton}>
                <Button type="text">
                    <NavLink to={'./counterparties'}>Контрагенты</NavLink>
                </Button>
            </div>
            <div className={styles.NavbarButton}>
                <Button type="text">
                    <NavLink to={'./changeHistory'}>История изменений</NavLink>
                </Button>
            </div>
        </nav>
    )
}

export default Navbar;