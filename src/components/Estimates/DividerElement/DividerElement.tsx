import React from "react";

import styles from './DividerElement.module.scss';
import {Button} from "antd";
import {MinusOutlined, HeartOutlined} from "@ant-design/icons";

const DividerElement = () => {
    return (
        <div className={styles.divider_wrapper}>
            <div className={styles.line_divider}></div>
            <div className={styles.divider_content}>
                <h3>Mindshare</h3>
                <Button className={styles.divider_info}>3</Button>
                <Button className={styles.divider_button}><MinusOutlined /></Button>
                <Button className={styles.divider_button}><HeartOutlined /></Button>
            </div>
            <div className={styles.line_divider}></div>
        </div>
    )
}

export default DividerElement;