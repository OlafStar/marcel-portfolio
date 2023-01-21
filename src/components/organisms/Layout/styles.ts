import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    @media (max-width: 1266px) {
        --h-padding: 70px;
    }
    @media (max-width: 546px) {
        --h-padding: 35px;
    }
    --h-padding: calc((100vw - 1440px) / 2 + 156px);
`;

type LogoContainerProps = {
    color: 'white' | 'black';
};

export const LogoContainer = styled.div<LogoContainerProps>`
    width: 100%;
    padding: 40px 0px 40px 70px;
    position: absolute;
    z-index: 2;
    color: ${({color}) => (color === 'black' ? 'black' : 'white')};
    @media (max-width: 546px) {
        display: none;
    }
`;

export const LogoContainerMobile = styled.div<LogoContainerProps>`
    position: absolute;
    top: 0;
    z-index: 2;
    padding: 42px 0px 42px 34px;
    width: 100%;
    color: ${({color}) => (color === 'black' ? 'black' : 'white')};

    @media (min-width: 547px) {
        display: none;
    }
`;

export const ScrollInfo = styled.div`
    font-size: 16px;
    font-weight: 300;
    line-height: 20px;
    letter-spacing: 0em;
    position: absolute;
    bottom: 53px;
    right: 35px;
    text-transform: uppercase;
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    color: white;
`;
