import styled from 'styled-components';

export const ImageWrapper = styled.div`
    img {
        filter : blur(${({blur}) => blur}px)
    }
`;

export const SettingsContainer = styled.div`
    display:flex;
`;

export const SliderContainer = styled.div`
    width:300px;
`;