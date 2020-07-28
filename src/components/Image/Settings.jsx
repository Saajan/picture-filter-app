import React from 'react';
import { useSelector } from 'react-redux';
import { SettingsContainer } from './styled';
import Slider from './Slider';

export default () => {

    let blurValue = useSelector(state => state.blur);

    return <SettingsContainer>
        <div>Blur</div><Slider value={blurValue} type="blur"></Slider>
    </SettingsContainer>
}