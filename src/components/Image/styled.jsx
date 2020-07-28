import styled from 'styled-components';

export const ImageWrapper = styled.div`
    img {
        filter : blur(${({blur}) => blur}px) grayscale(${({grayscale}) => grayscale}%)
    }
`;

export const SettingsContainer = styled.div`
    display:flex;
    flex-direction: column;
`;

export const SliderContainer = styled.div`
    width:300px;
`;