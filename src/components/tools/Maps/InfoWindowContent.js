import React from 'react';

export default function InfoWindowContent(props) {
    return (
        <div className="info-window">
            <h4 className="title text-primary text-uppercase">{props.title}</h4>
            <div className="info-wrapper">
                <p className="address">
                    {props.address}
                </p>
                <div className="contacts">
                    <p className="telephone">
                        <i className="fas fa-phone text-secondary mr-3" />
                        <span>{props.telephone}</span>
                    </p>
                    <p className="email">
                        <i className="fas fa-envelope text-secondary mr-3" />
                        <span><a href={`mailto:${props.email}`}>{props.email}</a></span>
                    </p>
                </div>
            </div>
        </div>
    );
}