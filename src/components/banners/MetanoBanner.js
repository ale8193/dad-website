import React from 'react';
import SavingCalculator from '../tools/SavingCalculator';
import { getAllPrices } from '../../model/prices';

export default function MetanoBanner() {
    const prices = getAllPrices();
    return (
        <section className="section metano-section">
            <div id="metano" className="section-wrapper">
                <div className="section-content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-6">
                                <iframe
                                    title="Metano? Come fare l'impianto"
                                    className="video"
                                    src="https://www.youtube.com/embed/9NB45hkgyYU"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                            <div className="col-12 col-md-12 col-lg-6">
                                <div className="text-left">
                                    <h2 className="section-header-lateral text-white">Metano</h2>
                                </div>
                                <div className="sub-section-content text-white">
                                    <h4 className="sub-header">Che cos'&egrave; il metano?</h4>

                                    <p className="content-value">
                                        <span className="font-weight-bold font-italic mr-1">"</span>
                                        Il metano è un gas naturale. Un’auto a metano è un’auto poco inquinante e per questa ragione oggetto di bonus e
                                        incentivi da parte dei governi. Il più importante vantaggio di un’auto a metano è il costo del carburante. Infatti, un
                                        pieno di metano costa in media solo 13 euro circa. Perciò, un veicolo a metano consente di ottenere un risparmio del
                                        carburante del 30% rispetto a una vettura diesel e del 55% rispetto a un modello benzina. Il risparmio è garantito anche
                                        da alcuni vantaggi fiscali come quelli riservati al bollo auto a metano. Infine, un altro vantaggio delle auto a metano
                                        è costituito dalla possibilità di circolare all’interno delle ZTL.
                                        <span className="font-weight-bold font-italic ml-1">"</span>
                                    </p>
                                    <h4 className="sub-header">Sfatiamo falsi miti!</h4>
                                    <p className="content-value">
                                        <span className="font-weight-bold font-italic mr-1">"</span>
                                        Quando si guida un’auto a metano, la sensazione di guida è ormai identica a quella che si prova su un veicolo diesel o
                                        benzina. Le performance dei motori, a parità di potenza, sono identiche e quindi la sensazione al volante è esattamente
                                        la stessa! Il bello delle auto a metano bifuel è che <b>possono proseguire la marcia anche quando il metano è finito</b>
                                         perché la vettura passa automaticamente all’alimentazione a benzina, tutto questo grazie alla doppia alimentazione che
                                        permette di raggiungere un’autonomia pari a 1.300 km. Un impianto a metano quindi è indispensabile per chi fa tanti
                                        chilometri e vuole risparmiare e per chi vuole circolare nei centri cittadini in modo eco-friendly. 
                                        <span className="font-weight-bold font-italic ml-1">"</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row my-5 justify-content-center">
                            <div className="col-12">
                                <SavingCalculator type="metano" fuelPrice={prices['bez']} savingPrice={prices['met']} unit="kilo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
