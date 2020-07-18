import React, { useState } from 'react';
import Image from './Image';
import Upload from './Upload';

export default () => {

    let [image, setImage] = useState('');

    return <div>
        {image ? <Image image={image}/> : <Upload setImage={setImage}/>}
    </div>
}