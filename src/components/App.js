import React, { Component } from 'react';
import '../style/css/app.css';
import SavingCalculator from './tools/SavingCalculator';
import { ParallaxProvider } from 'react-scroll-parallax';
import { routes } from '../routes';
import { getScreenType, BREAKPOINTS } from '../screenUtils';
import Navbar from './navigation/Navbar';
import Sidebar from './navigation/Sidebar';
import HeroBanner from './banners/HeroBanner';
import ServiceBanner from './banners/ServiceBanner';
import DiscoverArrow from './common/DiscoverArrow';

const PRICE = {
    met: 0.98,
    gpl: 0.67,
    bez: 1.64
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: routes.home.code,
            currentBlock: routes.home.code,
            screenType: getScreenType(),
            scrollDirection: null, // 1 == TOP | 0 == DOWN
            sideNavOpen: false
        };
        this.scrollPos = 0;
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateScreenType);
        window.addEventListener('scroll', this.captureScrollDirection);
    }

    updateScreenType = () => {
        this.setState({ screenType: getScreenType() });
    };

    captureScrollDirection = () => {
        let direction = null;
        if (document.body.getBoundingClientRect().top > this.scrollPos) {
            direction = 1;
        } else if (document.body.getBoundingClientRect().top < this.scrollPos && this.scrollPos < 15 && this.scrollPos !== 0) {
            direction = 0;
        } else {
            direction = null;
        }
        // saves the new position for iteration.
        this.scrollPos = document.body.getBoundingClientRect().top;
        this.setState({
            scrollDirection: direction
        });
    };

    handleBlockChange = (e, block) => {
        e.preventDefault();
        this.setState({ currentBlock: block, sideNavOpen: false });
        const jQuery = window.jQuery;
        const target = jQuery(`#${block}`);
        if (target.length) {
            jQuery('html, body').animate(
                {
                    scrollTop: target.offset().top
                },
                1000
            );
        }
    };

    toggleSidenav = () => {
        const { sideNavOpen } = this.state;
        this.setState({
            sideNavOpen: !sideNavOpen
        });
    };

    handlePageChange = (e, page) => {
        e.preventDefault();
        this.setState({ currentPage: page });
    };

    handleFuelClick = (event, type) => {
        event.preventDefault();
        this.setState({
            typeFuel: type
        });
    };

    render() {
        const { currentBlock, currentPage, scrollDirection, sideNavOpen } = this.state;
        return (
            <ParallaxProvider>
                <div id="home" className="app-wrapper">
                    <Navbar
                        current={currentBlock}
                        handleLinkClick={this.handleBlockChange}
                        scrollDirection={scrollDirection}
                        toggleSidenav={this.toggleSidenav}
                    />
                    <Sidebar current={currentBlock} handleLinkClick={this.handleBlockChange} sideNavOpen={sideNavOpen} toggleSidenav={this.toggleSidenav} />
                    <HeroBanner handleLinkClick={this.handleBlockChange} />
                    <DiscoverArrow handleLinkClick={this.handleBlockChange} />
                    <ServiceBanner />
                    <div id="metano" className="container py-5">
                        <SavingCalculator type="metano" fuelPrice={PRICE['bez']} savingPrice={PRICE['met']} unit="kilo" />
                    </div>
                    <div id="gpl" className="container py-5">
                        <SavingCalculator type="gpl" fuelPrice={PRICE['bez']} savingPrice={PRICE['gpl']} unit="litro" />
                    </div>
                    <div id="where" style={{ height: '1000px' }} className="container py-5">
                        <h2 className="text-primary">DOVE SIAMO</h2>
                    </div>
                    <div id="contact" style={{ height: '1000px' }} className="container py-5">
                        <h2 className="text-primary">CONTATTI</h2>
                    </div>
                </div>
            </ParallaxProvider>
        );
    }
}

export default App;
