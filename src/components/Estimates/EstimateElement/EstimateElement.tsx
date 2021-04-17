import React from "react";
import {Button} from "antd";
import { PlusOutlined, PaperClipOutlined } from "@ant-design/icons";

import styles from './EstimateElement.module.scss';

const EstimateElement = () => {
    return(
        <div className = {styles.element_wrapper}>
            <div className={styles.element_body}>вся инфа</div>
            <div>
                <Button className={styles.element_button}><PlusOutlined /></Button>
                <Button className={styles.element_button}><PaperClipOutlined /></Button>
            </div>
        </div>
    )
}

export default EstimateElement;