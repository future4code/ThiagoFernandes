import React from 'react';
import './SmallCard.css';
import PropTypes from 'prop-types';

export function SmallCard(props) {
    return (

        <div className="smallCard">
            <div id="icon">
                <img src={props.imagem} alt="" />
            </div>
            <div className="info">
                <p id="emailendereco">{props.card}</p>
                <p>{props.info}</p>
            </div>
        </div>

    )
}

SmallCard.propTypes = {
    imagem: PropTypes.string.isRequired,
    card: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired
}