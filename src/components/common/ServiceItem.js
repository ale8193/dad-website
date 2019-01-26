import React from 'react';

export default function ServiceItem(props) {
    const service = props.service;
    const subServices = service.subServices.map((subService, index) => (
        <li key={index}>
            <i class="fas fa-check text-secondary mr-3" /> {subService.item}
        </li>
    ));

    return (
        <div className="serrvice-item">
            <h2 className="service-number text-primary">{service.id < 10 ? '0' + (service.id + 1) : (service.id + 1)}</h2>
            <h4 className="service-head">{service.name}</h4>
            <ul className="services-list" >
                {subServices}
            </ul>
        </div>
    );
}
