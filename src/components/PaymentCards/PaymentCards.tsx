import React from "react";
import InputElement from "../componentElements/InputElement/InputElement";

const PaymentCards = () => {
    const phText:string = 'найти карточки оплат';

    return (
        <div>
            <InputElement placeholder={phText}/>
        </div>
    )
}

export default PaymentCards;