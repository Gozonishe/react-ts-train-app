import React from "react";
import {Button, Popover} from "antd";
import { PlusOutlined, PaperClipOutlined } from "@ant-design/icons";

import styles from './EstimateElement.module.scss';

const EstimateElement = () => {
    const text = <span>Name</span>;
    const content = (
        <div>
            <p><b>Firm</b></p>
            <p>Phone</p>
            <p>Email</p>
            <p>Skype</p>
            <p>Telegram</p>
        </div>
    );

    return(
        <div className = {styles.element_wrapper}>

            <div className={styles.element_body}>
                <Popover placement="bottomLeft" className={styles.popup_info_button} title={text} content={content} trigger="click">
                    <Button>XX</Button>
                </Popover>
                <Popover placement="bottomLeft" className={styles.popup_info_button} title={text} content={content} trigger="click">
                    <Button>XX</Button>
                </Popover>
                <div className={styles.estimate_element_info}>Client</div>
                <div className={styles.estimate_element_info}>Cash</div>
                <div className={styles.estimate_element_info}>Date</div>
                <div className={styles.estimate_element_info}>Banners</div>
                <div className={styles.estimate_element_info}>Quantity</div>
            </div>
            <div>
                <Button className={styles.element_button}><PlusOutlined /></Button>
                <Button className={styles.element_button}><PaperClipOutlined /></Button>
            </div>
        </div>
    )
}

export default EstimateElement;