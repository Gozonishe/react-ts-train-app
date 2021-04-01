import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <div>
                <NavLink to={'./reports'}>Отчеты и графики</NavLink>
            </div>
            <div>
                <NavLink to={'./estimates'}>Входящие сметы</NavLink>
            </div>
            <div>
                <NavLink to={'./paymentCards'}>Карточки оплат</NavLink>
            </div>
            <div>
                <NavLink to={'./archiveCards'}>Архив карточек</NavLink>
            </div>
            <div>
                <NavLink to={'./counterparties'}>Контрагенты</NavLink>
            </div>
            <div>
                <NavLink to={'./changeHistory'}>История изменений</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;