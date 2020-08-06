import React from 'react';
import { useSelector } from 'react-redux';
import { SettingsContainer } from './styled';
import Slider from './Slider';

const settings = [{
    title: "Blur",
    value: "blur",
    min: 0,
    max: 30,
    step: 0.1
}, {
    title: "Grey Scale",
    value: "grayscale",
    min: 0,
    max: 100,
    step: 1
},{
    title: "Brightness",
    value: "brightness",
    min: 0,
    max: 200,
    step: 5
},{
    title: "Contrast",
    value: "contrast",
    min: 0,
    max: 200,
    step: 5
},{
    title: "Opacity",
    value: "opacity",
    min: 0,
    max: 100,
    step: 1
},{
    title: "Sepia",
    value: "sepia",
    min: 0,
    max: 100,
    step: 1
},{
    title: "Invert",
    value: "invert",
    min: 0,
    max: 100,
    step: 1
},{
    title: "Saturate",
    value: "saturate",
    min: 0,
    max: 200,
    step: 5
},{
    title: "Hue Rotate",
    value: "hueRotate",
    min: 0,
    max: 360,
    step: 1
}];

export default () => {

    let stateValue = useSelector(state => state);

    return <SettingsContainer>
        {settings.map((setting, index) => (<div key={index}>
            <div>{setting.title}</div>
            <Slider value={stateValue[setting.value]} min={setting.min} max={setting.max} step={setting.step} type={setting.value}></Slider>
        </div>))}
    </SettingsContainer>
}