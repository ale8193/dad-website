import React, { Component } from 'react';
import '../style/css/app.css';
import SavingCalculator from './tools/SavingCalculator';
import { routes } from '../routes';
import { getScreenType, BREAKPOINTS } from '../screenUtils';
import Navbar from './navigation/Navbar';

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
            scrollDirection: null // 1 == TOP | 0 == DOWN
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
        })
    };

    handleBlockChange = (e, block) => {
        e.preventDefault();
        this.setState({ currentBlock: block });
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
        const { currentBlock, currentPage, scrollDirection } = this.state;
        return (
            <div id="home" className="app-wrapper">
                <Navbar current={currentBlock} handleLinkClick={this.handleBlockChange} scrollDirection={scrollDirection} />
                <div style={{ height: '1000px' }} />
                <div id="about" style={{ height: '1000px' }} className="container py-5">
                    <h2 className="text-primary">CHI SIAMO</h2>
                </div>
                <div id="metano" className="container py-5">
                    <SavingCalculator type="metano" fuelPrice={PRICE['bez']} savingPrice={PRICE['met']} unit="kilo" />
                </div>
                <div id="gpl" className="container py-5">
                    <SavingCalculator type="gpl" fuelPrice={PRICE['bez']} savingPrice={PRICE['gpl']} unit="litro" />
                </div>
                <div id="service" style={{ height: '1000px' }} className="container py-5">
                    <h2 className="text-primary">SERVIZI</h2>
                </div>
                <div id="contact" style={{ height: '1000px' }} className="container py-5">
                    <h2 className="text-primary">CONTATTI</h2>
                </div>
            </div>
        );
    }
}

export default App;
