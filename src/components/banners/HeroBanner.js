import React from 'react';
import { Parallax } from 'react-scroll-parallax';

export default function HeroBanner() {
    return (
        <Parallax className="section hero-section" offsetYMax={20} offsetYMin={-20} slowerScrollRate tag="section">
            <div className="section-wrapper">
                <div className="section-content">
                    <h1 className="text-primary text-center text-upper font-1">OFFICINA STAFFOLANI</h1>
                    <h3 className="text-center text-white font-3">
                        Officina specializzata <span className="text-secondary">Metano</span> e <span className="text-secondary">GPL</span>
                    </h3>
                </div>
            </div>
        </Parallax>
    );
}
