import React from 'react';
import { routes } from '../../routes';

export default function DiscoverArrow(props) {
    return (
        <div className="text-center discover-arrow">
            <p className="text-white mb-1" onClick={e => props.handleLinkClick(e, routes['service'].code)}>
                scopri
            </p>
            <p className="text-white" onClick={e => props.handleLinkClick(e, routes['service'].code)}>
                <i className="fas fa-angle-down fa-2x" />
            </p>
        </div>
    );
}
