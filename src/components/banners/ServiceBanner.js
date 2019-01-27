import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { getAllServices } from '../../model/services';
import ServiceItem from '../common/ServiceItem';

export default class ServiceBanner extends Component {
    render() {
        const services = getAllServices();
        return (
            <section className="section service-section">
                <div className="section-wrapper">
                    <div className="section-content">
                        <div className="text-center mb-5">
                            <h2 id="service" className="section-header">Servizi</h2>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-10 col-lg-9 col-xl-8">
                                <div className="row justify-content-start">
                                    {services.map(service => (
                                        <div key={service.id} className="col-12 col-md-6 col-lg-4">
                                            <ServiceItem service={service} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
