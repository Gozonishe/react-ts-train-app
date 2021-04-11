import React from "react";
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

import styles from './DropMenuUnit.module.scss'

const DropMenuUnit = () => {
    const { SubMenu } = Menu;


/*    const handleClick = e => {
        console.log('click ', e);
    };*/

    return (
        <div>
            <Menu
/*
            onClick={this.handleClick}
*/
            style={{ width: 256 }}
            defaultSelectedKeys={['all_units']}
            defaultOpenKeys={['1']}
            mode="inline"
            >
            <SubMenu className={styles.dropUnitText} key="all_units" title="Все юниты">
            <Menu.Item className={styles.dropUnitText} key="advertising">Advertising</Menu.Item>
            <Menu.Item className={styles.dropUnitText} key="digital_products">Digital Products</Menu.Item>
            <Menu.Item className={styles.dropUnitText} key="motion_design">Motion Design</Menu.Item>
            <Menu.Item className={styles.dropUnitText} key="lab">Lab</Menu.Item>
            <Menu.Item className={styles.dropUnitText} key="no_unit">Без юнита</Menu.Item>
            </SubMenu>
            </Menu>
        </div>
            );
        }


export default DropMenuUnit;