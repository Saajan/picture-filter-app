import React from 'react';
import ImageUploader from 'react-images-upload';

export default (props) => {

    let { setImage } = props;
    const onDrop = (picture) => {
        setImage(picture);
    }

    return (
        <ImageUploader
            withIcon={true}
            singleImage={true}
            buttonText='Choose the Image'
            onChange={onDrop}
            imgExtension={['.jpg', '.gif', '.png', '.gif']}
            maxFileSize={5242880}
        />
    );
}