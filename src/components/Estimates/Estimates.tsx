import React from "react";
import InputElement from "../componentElements/InputElement/InputElement";

const Estimates = () => {
    const phText:string = 'найти смету';

    return (
        <div>
            <InputElement placeholder={phText}/>
        </div>
    )
}

export default Estimates;