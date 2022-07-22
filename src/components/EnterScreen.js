import React from 'react';
import bigLogo from '../assets/img/big-logo.png';

export default function EnterScreen({showScreenTwo}) {

    return (
        <section className="screenOne">
            <img src={bigLogo} alt=""/>
            <h1>ZapRecall</h1>
            <button onClick={()=> {
                showScreenTwo("screenTwo");
                }}><p>Iniciar Recall!</p></button>
        </section>
    )
}