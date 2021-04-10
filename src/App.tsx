import React from 'react';
import {Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Reports from "./components/Reports/Reports";
import Estimates from "./components/Estimates/Estimates";
import PaymentCards from "./components/PaymentCards/PaymentCards";
import ArchiveCards from "./components/ArchiveCards/ArchiveCards";
import ChangeHistory from "./components/ChangeHistory/ChangeHistory";
import Counterparties from "./components/Counterparties/Counterparties";
import './App.scss';

function App() {
    return (
        <div className="app-wrapper">
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/reports'} render={() => <Reports/>}/>
                <Route path={'/estimates'} render={() => <Estimates/>}/>
                <Route path={'/paymentCards'} render={() => <PaymentCards/>}/>
                <Route path={'/archiveCards'} render={() => <ArchiveCards/>}/>
                <Route path={'/counterparties'} render={() => <Counterparties/>}/>
                <Route path={'/changeHistory'} render={() => <ChangeHistory/>}/>
            </div>
        </div>
    );
}

export default App;
