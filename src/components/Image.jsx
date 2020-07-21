import React from 'react';
import localforage from 'localforage';

export default (props) => {
    let { image, setImage } = props;
    let fileUrl = URL.createObjectURL(image[0]);
    const removeImage = async () => {
        await localforage.removeItem('image');
        setImage('');
    };
    return (
        <div>
            <button onClick={() => removeImage()}>x</button>
            <div className="image-container">
                <img src={fileUrl} alt="uploaded" />
            </div>
        </div>
    );
}