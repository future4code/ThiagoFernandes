import React from 'react';
import { Wrapper, WelcomeTxt, Txt, WelcomeArea } from './styled'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

const Landing = () => (

    <Wrapper>
        <WelcomeArea>
            <WelcomeTxt>Welcome to FutureTube 2.0</WelcomeTxt>
            <PlayCircleFilledIcon />
        </WelcomeArea>
        <Txt>Please login to continue</Txt>
    </Wrapper>

);


export default Landing;