import React from 'react';

export default function EnterScreen({showScreenTwo}) {

    return (
        <section className="screenOne">
            <img src="/assets/img/big-logo.png" alt=""/>
            <h1>ZapRecall</h1>
            <button onClick={()=> {
                showScreenTwo("screenTwo");
                }}><p>Iniciar Recall!</p></button>
        </section>
    )
}