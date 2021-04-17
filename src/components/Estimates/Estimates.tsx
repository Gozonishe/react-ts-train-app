import {Button, Divider } from "antd";
import React from "react";
import InputElement from "../componentElements/InputElement/InputElement";
import EstimateElement from "./EstimateElement/EstimateElement";
import DividerElement from './DividerElement/DividerElement';

import styles from './Estimates.module.scss';

const Estimates = () => {
    const phText:string = 'найти смету';

    return (
        <div>
            <div>
                <InputElement placeholder={phText}/>
            </div>
            <div>
                <h2>Входящие сметы</h2>
            </div>
            <div>
                <DividerElement/>
            </div>
            <div>
                <EstimateElement/>
            </div>
        </div>
    )
}

export default Estimates;