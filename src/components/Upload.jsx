import React from 'react';
import ImageUploader from 'react-images-upload';
import localforage from 'localforage';

export default (props) => {
    let { setImage } = props;
    const onDrop = (picture) => {
        localforage.setItem("image", picture);
        setImage(picture);
    };
    return (
        <ImageUploader
            withIcon={true}
            accept="image/jpeg, image/png"
            singleImage={true}
            buttonText='Choose the Image'
            onChange={onDrop}
            imgExtension={['.jpg', '.png']}
            maxFileSize={5242880}
        />
    );
}