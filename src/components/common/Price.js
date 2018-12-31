import React from 'react';
import { formatPrice } from '../../utils';

export default function Price(props) {
    const price = formatPrice(props.price)
    return <span className="price-text">{price}</span>;
}
