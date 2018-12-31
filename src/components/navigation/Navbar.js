import React, { Component } from 'react';
import { routes } from '../../routes';
import logo from '../../images/logo.png';

export default class Navbar extends Component {
    render() {
        const { current, handleLinkClick, scrollDirection } = this.props;
        let navItemLength = 100 / Object.keys(routes).length;
        const navItems = Object.keys(routes).map((code, index) =>
            code === 'home' ? (
                <span
                    style={{ width: `${navItemLength}%` }}
                    className={current === code ? 'nav-item-logo active' : 'nav-item-logo '}
                    key={index}
                    title={routes[code].title}
                    onClick={e => handleLinkClick(e, code)}
                >
                    <img src={logo} className="logo" alt={routes[code].label} />
                </span>
            ) : (
                <span
                    style={{ width: `${navItemLength}%` }}
                    className={current === code ? 'nav-item active' : 'nav-item '}
                    key={index}
                    title={routes[code].title}
                    onClick={e => handleLinkClick(e, code)}
                >
                    {routes[code].label}
                </span>
            )
        );
        let navbarClass = 'custom-navbar shadow';
        if (scrollDirection === 1) {
            navbarClass += ' fixed';
        } else if (scrollDirection === 0) {
            navbarClass += ' close'
        }

        return (
            <nav className={navbarClass} id="app-navbar">
                <div className="mobile-navbar">
                    <span className="toggle-icon">
                        <i className="fas fa-bars" />
                    </span>
                    <div className="text-center">
                        <span className="nav-item-logo" title={routes['home'].title} onClick={e => handleLinkClick(e, 'home')}>
                            <img src={logo} className="logo" alt={routes['home'].label} />
                        </span>
                    </div>
                </div>
                <div className="nav-items container">{navItems}</div>
            </nav>
        );
    }
}
