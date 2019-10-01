import React from 'react';
import './pageSection1.css';
import PropTypes from 'prop-types';

export function PageSection(props) {
    return (

        <div className="pageSection1">
            
        </div>

    )
}

PageSection.propTypes = {
    imagem: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired,
}