import React from 'react';
import { withAuthorization } from '../Session';

const HomePage = () => (

    <div>
        <h1>Usarios logados blabla</h1>
        <p>Videos para usuarios logados.</p>
    </div>

);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);