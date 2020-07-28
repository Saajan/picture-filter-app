import React from 'react';
import { useSelector } from 'react-redux';
import { SettingsContainer } from './styled';
import Slider from './Slider';

export default () => {

    let blurValue = useSelector(state => state.blur);
    let grayscaleValue = useSelector(state => state.greyScale);

    return <SettingsContainer>
        <div>
            <div>Blur</div>
            <Slider key="1" value={blurValue} min={0} max={30} step={0.1} type="blur"></Slider>
        </div>
        <div>
            <div>Grey Scale</div>
            <Slider key="2" value={grayscaleValue} min={0} max={100} step={1} type="grayscale"></Slider>
        </div>
    </SettingsContainer>
}