import React from "react";
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

import styles from './DropMenuCompany.module.scss'

const DropMenuCompany = () => {
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
            defaultSelectedKeys={['Bono Digital']}
            defaultOpenKeys={['1']}
            mode="inline"
            >
            <SubMenu key="bono_digital" title="Bono Digital">
            <Menu.Item key="2">Company 2</Menu.Item>
            <Menu.Item key="3">Company 3</Menu.Item>
            </SubMenu>
            </Menu>
        </div>
            );
        }


export default DropMenuCompany;