import React from "react";
import InputElement from "../componentElements/InputElement/InputElement";

const Counterparties = () => {
    const phText:string = 'найти контрагента';

    return (
        <div>
            <InputElement placeholder={phText}/>
        </div>
    )
}

export default Counterparties;