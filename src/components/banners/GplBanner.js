import React from 'react';
import SavingCalculator from '../tools/SavingCalculator';
import { getAllPrices } from '../../model/prices';

export default function GplBanner() {
    const prices = getAllPrices();
    return (
        <section className="section gpl-section">
            <div id="gpl" className="section-wrapper">
                <div className="section-content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-6 margin-md-b-3rem">
                                <div className="text-left">
                                    <h2 className="section-header-lateral text-white">GPL</h2>
                                </div>
                                <div className="sub-section-content text-white">
                                    <h4 className="sub-header">Che cos'&egrave; il GPL?</h4>
                                    <p className="content-value">
                                        <span className="font-weight-bold font-italic mr-1">"</span>
                                        Il GPL (Gas di petrolio liquefatto) è un derivato del petrolio, e quindi garantisce una combustione più simile a quelle
                                        dei carburanti tradizionali. La diffusione delle auto alimentate a GPL, oltre che dalla possibilità di circolare anche
                                        in occasione dei blocchi del traffico, è stata favorita dal prezzo del carburante, del 50% inferiore a quello della
                                        benzina.
                                        <span className="font-weight-bold font-italic ml-1">"</span>
                                    </p>
                                    <h4 className="sub-header">Ma non solo</h4>
                                    <p className="content-value">
                                        <span className="font-weight-bold font-italic mr-1">"</span>
                                        un’auto a GPL permette di <b>ottimizzare le spese</b> e di diminuire il consumo di carburante. Infatti, un pieno di GPL
                                        si aggira intorno ai 20 €, ma il consumo effettivo del GPL su piccole motorizzazioni non supera mai i 13-14 chilometri
                                        al litroInoltre, un’auto a GPL consente di bypassare tutti i divieti legati a traffico limitato per motivi di
                                        inquinamento. Questo perché il GPL inquina molto meno rispetto a benzina e Diesel. Può essere quindi la soluzione ideale
                                        per chi ama l’ambiente! Ultimo, ma non meno importante, il GPL nonostante è un derivato dal petrolio, difficilmente
                                        subisce rincari sul prezzo. 
                                        <span className="font-weight-bold font-italic ml-1">"</span>
                                    </p>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-6">
                                <iframe
                                    title="GPL? Come fare l'impianto"
                                    className="video"
                                    src="https://www.youtube.com/embed/a3Dqk20PSj8"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                        <div className="row my-5 justify-content-center">
                            <div className="col-12">
                                <SavingCalculator type="gpl" fuelPrice={prices['bez']} savingPrice={prices['gpl']} unit="litro" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
