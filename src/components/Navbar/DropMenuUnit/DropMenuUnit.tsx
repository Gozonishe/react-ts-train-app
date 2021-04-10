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
            <SubMenu key="all_units" title="Все юниты">
            <Menu.Item key="advertising">Advertising</Menu.Item>
            <Menu.Item key="digital_products">Digital Products</Menu.Item>
            <Menu.Item key="motion_design">Motion Design</Menu.Item>
            <Menu.Item key="lab">Lab</Menu.Item>
            <Menu.Item key="no_unit">Без юнита</Menu.Item>
            </SubMenu>
            </Menu>
        </div>
            );
        }


export default DropMenuUnit;