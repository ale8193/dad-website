import React from 'react';

export default function InfoWindowContent(props) {
    const { placeInfo, closeCallback } = props;
    return (
        <div className="info-window">
            <h4 className="title text-primary text-uppercase d-inline-block">{placeInfo.title}</h4>
            <i className="fas fa-times close-icon" onClick={closeCallback} />
            <div className="info-wrapper">
                <p className="address">
                    {placeInfo.address}
                </p>
                <div className="contacts">
                    <p className="telephone">
                        <i className="fas fa-phone text-secondary mr-3" />
                        <span>{placeInfo.telephone}</span>
                    </p>
                    <p className="email">
                        <i className="fas fa-envelope text-secondary mr-3" />
                        <span><a href={`mailto:${placeInfo.email}`}>{placeInfo.email}</a></span>
                    </p>
                </div>
            </div>
        </div>
    );
}
