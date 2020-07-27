import React from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css'

export default (props) => {
    let { value, handleChange } = props;
    return (
        <div className='slider'>
            <Slider
                min={0}
                max={100}
                value={value}
                onChange={handleChange}
            />
            <div className='value'>{value}</div>
        </div>
    )
}
