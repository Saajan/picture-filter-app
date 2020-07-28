import React from 'react';
import localforage from 'localforage';
import { useSelector } from 'react-redux';

import Settings from './Settings';
import { ImageWrapper } from './styled';

export default (props) => {
    let { image, setImage } = props;

    let blurValue = useSelector(state => state.blur);
    let greyScaleValue = useSelector(state => state.grayscale);

    let fileUrl = URL.createObjectURL(image[0]);

    const removeImage = async () => {
        await localforage.removeItem('image');
        setImage('');
    };

    return (
        <div>
            <Settings></Settings>
            <button onClick={() => removeImage()}>x</button>
            <div className="image-container">
                <ImageWrapper blur={blurValue} grayscale={greyScaleValue}><img src={fileUrl} alt="uploaded" /></ImageWrapper>
            </div>
        </div>
    );
}