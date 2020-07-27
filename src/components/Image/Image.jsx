import React from 'react';
import localforage from 'localforage';
import Settings from './Settings';
import { ImageWrapper } from './styled';

export default (props) => {
    let { image, setImage } = props;
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
                <ImageWrapper><img src={fileUrl} alt="uploaded" /></ImageWrapper>
            </div>
        </div>
    );
}