import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';

export default class ServiceBanner extends Component {
    render() {
        return (
            <Parallax className="section service-section" offsetYMax={20} offsetYMin={-20} slowerScrollRate tag="section">
                <div id="service" className="section-wrapper">
                    <div className="section-content">
                        <div className="text-center">
                            <h2>Servizi</h2>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-4">
                                <h4>Elettrauto</h4>
                                <ul className="services-list">
                                    <li><i class="fas fa-check text-secondary mr-3" /> Ricarica aria condizionata</li>
                                    <li><i class="fas fa-check text-secondary mr-3" /> Cambio luci</li>
                                </ul>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <h4>Impianti Metano</h4>
                                <ul className="services-list">
                                    <li><i class="fas fa-check text-secondary mr-3" /> Montaggio impianti metano</li>
                                    <li><i class="fas fa-check text-secondary mr-3" /> Manutenzione impianti metano</li>
                                    <li><i class="fas fa-check text-secondary mr-3" /> Revisione bombole</li>
                                </ul>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <h4>Impianti GPL</h4>
                                <ul className="services-list">
                                    <li><i class="fas fa-check text-secondary mr-3" /> Montaggio impianti gpl</li>
                                    <li><i class="fas fa-check text-secondary mr-3" /> Manutenzione impianti gpl</li>
                                    <li><i class="fas fa-check text-secondary mr-3" /> Revisione bombole</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Parallax>
        );
    }
}
