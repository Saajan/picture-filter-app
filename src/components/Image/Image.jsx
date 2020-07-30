import React from 'react';
import localforage from 'localforage';
import { useSelector } from 'react-redux';
import Settings from './Settings';
import { ImageWrapper, ButtonWrapper, MainContainer } from './styled';

export default (props) => {
    let { image, setImage } = props;

    let blurValue = useSelector(state => state.blur);
    let grayscaleValue = useSelector(state => state.grayscale);

    let fileUrl = URL.createObjectURL(image[0]);

    const removeImage = async () => {
        await localforage.removeItem('image');
        setImage('');
    };

    return (
        <>
            <ButtonWrapper><button onClick={() => removeImage()}>x</button></ButtonWrapper>
            <MainContainer>
                <Settings></Settings>
                <ImageWrapper blur={blurValue} grayscale={grayscaleValue}>
                    <img src={fileUrl} alt="uploaded" />
                </ImageWrapper>
            </MainContainer>
        </>
    );
}