import styled from 'styled-components';

export const SettingsContainer = styled.div`
    display:flex;
    flex-direction: column;
`;

export const SliderContainer = styled.div`
    width:300px;
`;

export const ButtonWrapper = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
    margin: 15px;
    button{
        cursor: pointer;
        font-size: 31px;
        height: 50px;
        width: 50px;
        background: none;
        border: 0;
    }
`;

export const MainContainer = styled.div`
    margin: 20px;
    width: 100%;
    height: calc(100% - 40px);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    flex: 1 2;
`;

export const ImageWrapper = styled.div`
    border: 1px solid #eee;
    height: 100%;
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
      filter : blur(${({ blur }) => blur}px) grayscale(${({ grayscale }) => grayscale}%)
    }
`;