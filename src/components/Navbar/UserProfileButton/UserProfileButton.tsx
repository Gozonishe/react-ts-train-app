import React from "react";
import {UserOutlined} from '@ant-design/icons';


import styles from './UserProfileButton.module.scss';
import {NavLink} from "react-router-dom";
import {Button} from "antd";

const UserProfileContainerModule = () => {
    return(
        <Button className={styles.userContainerWrapper} type={'link'}>
            <UserOutlined className={styles.userAvatar}/>
            <NavLink to={'./loginUserPage'} className={styles.userName}>Имя Фамилия</NavLink>
        </Button>
    )
}

export default UserProfileContainerModule;