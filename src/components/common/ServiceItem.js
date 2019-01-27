import React from 'react';

export default function ServiceItem(props) {
    const service = props.service;
    const subServices = service.subServices.map((subService, index) => (
        <li key={index}>
            <div className="item-content">
                <i className="fas fa-check text-secondary mr-3 item-icon" />
                <span className="item-value">{subService.item}</span>
            </div>
        </li>
    ));

    return (
        <div className="service-item">
            <h2 className="service-number text-primary">{service.id < 10 ? '0' + (service.id + 1) : service.id + 1}</h2>
            <h4 className="service-head">{service.name}</h4>
            <ul className="services-list">{subServices}</ul>
        </div>
    );
}
