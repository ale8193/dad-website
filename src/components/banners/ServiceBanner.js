import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { getAllServices } from '../../model/services';
import ServiceItem from '../common/ServiceItem';

export default class ServiceBanner extends Component {
    render() {
        const services = getAllServices();
        return (
            <Parallax className="section service-section" offsetYMax={20} offsetYMin={-20} slowerScrollRate tag="section">
                <div className="section-wrapper">
                    <div className="section-content">
                        <div className="text-center mb-5">
                            <h2 id="service">Servizi</h2>
                        </div>
                        <div className="row">
                            {services.map(service => (
                                <div className="col-12 col-md-6 col-lg-4">
                                    <ServiceItem service={service} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Parallax>
        );
    }
}
