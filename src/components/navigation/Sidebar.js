import React, { Component } from 'react';
import { routes } from '../../routes';

export default class Sidebar extends Component {
    render() {
        const { current, handleLinkClick, sideNavOpen, toggleSidenav } = this.props;
        const navItems = Object.keys(routes).map((code, index) => (
            <span className={current === code ? 'nav-item active' : 'nav-item '} key={index} title={routes[code].title} onClick={e => handleLinkClick(e, code)}>
                {routes[code].label}
            </span>
        ));

        let width = sideNavOpen ? 100 : 0;

        return (
            <aside style={{ width: `${width}%`}} className="custom-sidebar">
                <i className="closebtn fas fa-times" onClick={toggleSidenav} />
                <div className="sidebar-content">{navItems}</div>
            </aside>
        );
    }
}
