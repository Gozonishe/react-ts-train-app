import React from "react";
import {NavLink} from "react-router-dom";

import './Navbar.scss';

const Navbar = () => {
    return (
        <nav className={'navbar-wrapper'}>
            <div className={'navbar-button'}>
                <NavLink to={'./reports'}>Отчеты и графики</NavLink>
            </div>
            <div className={'navbar-button'}>
                <NavLink to={'./estimates'}>Входящие сметы</NavLink>
            </div>
            <div className={'navbar-button'}>
                <NavLink to={'./paymentCards'}>Карточки оплат</NavLink>
            </div>
            <div className={'navbar-button'}>
                <NavLink to={'./archiveCards'}>Архив карточек</NavLink>
            </div>
            <div className={'navbar-button'}>
                <NavLink to={'./counterparties'}>Контрагенты</NavLink>
            </div>
            <div className={'navbar-button'}>
                <NavLink to={'./changeHistory'}>История изменений</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;