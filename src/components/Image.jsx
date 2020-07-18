import React from 'react';

export default (props) => {
    let { image } = props;
    let fileUrl = URL.createObjectURL(image[0]);
    return (<div className="image-container">
        <img src={fileUrl} alt="uploaded" />
    </div>);
}