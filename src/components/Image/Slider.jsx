import React from 'react';
import Slider from 'react-rangeslider';
import { useDispatch } from 'react-redux'
import { changeSettings } from '../../actions';
import { SliderContainer } from './styled';
import 'react-rangeslider/lib/index.css';

export default (props) => {

    let { value, type, min = 0, max = 100, step = 1 } = props;

    const dispatch = useDispatch();

    const handleChange = (value) => {
        dispatch(changeSettings({
            filter: type,
            value
        }))
    }

    return (
        <SliderContainer>
            <Slider
                min={min}
                max={max}
                value={value}
                step={step}
                onChange={handleChange}
            />
            <div className='value'>{value}</div>
        </SliderContainer>
    )
}
