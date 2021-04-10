import React from "react";
import {UserOutlined} from '@ant-design/icons';


import styles from './UserProfileContainer.module.scss';

const UserProfileContainerModule = () => {
    return(
        <div className={styles.userContainerWrapper}>
            <UserOutlined className={styles.userAvatar}/>
            <h4 className={styles.userName}>Имя Фамилия</h4>
        </div>
    )
}

export default UserProfileContainerModule;