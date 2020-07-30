import React, { useState, useEffect } from 'react';
import localforage from 'localforage';
import Image from './Image/Image';
import Upload from './Upload';

export default () => {
    let [image, setImage] = useState('');
    useEffect(() => {
        const getImage = async () => {
            let image = await localforage.getItem('image');
            let data = image && image.length > 0 ? image : '';
            setImage(data);
        }
        getImage();
    }, []);
    return <>
        {image ? <Image image={image} setImage={setImage}/> : <Upload setImage={setImage} />}
    </>
}