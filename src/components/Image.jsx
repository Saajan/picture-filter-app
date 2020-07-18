import React from 'react';

export default (props) => {
    let { image } = props;
    let fileUrl = URL.createObjectURL(image[0]);
    return <div>
        <img src={fileUrl} alt="uploaded" width="500" height="600" />
    </div>
}