import React from 'react';
import Price from './Price';

export default function PriceBox(props) {
    return (
        <div className={'price-box shadow-sm ' + props.type}>
            <h6 className="head text-capitalize">{props.title}</h6>
            <small className="font-extra-small font-italic info">
                {props.info}
            </small>
            <div className="result-line">
                <Price price={props.result} /> all'anno
            </div>
        </div>
    );
}
