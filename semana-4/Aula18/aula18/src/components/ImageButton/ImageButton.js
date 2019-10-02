import React from 'react';
import './ImageButton.css';
import PropTypes from 'prop-types';

export function ImageButton(props) {
    return (

        <div className="btnVerMais">
            <img src={props.imagem} alt="" />
            <p>{props.texto}</p>
        </div>

    )
}

ImageButton.propTypes = {
    imagem: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired,
}