import React from 'react';
import './Bigcard.css';
import PropTypes from 'prop-types';

export function BigCard(props) {
    return (

        <div class="bigCardWrapper">
            <img id="imgBio" src={props.foto} alt="" />
            <div className="bigCard">
                <div id="nome">
                    <p>{props.nome}</p>
                </div>
                <div id="bio">
                    <p>{props.bio}</p>
                </div>
            </div>
        </div>

    )
}

BigCard.propTypes = {
    nome: PropTypes.string.isRequired,
    foto: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired
}