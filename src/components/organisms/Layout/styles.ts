import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
`;

export const LogoContainer = styled.div`
    width: 100%;
    padding: 40px 0px 40px 70px;
    position: absolute;
    z-index: 2;
    @media (max-width: 546px) {
        display: none;
    }
`;

export const LogoContainerMobile = styled.div`
    position: absolute;
    top: 0;
    z-index: 2;
    padding: 42px 0px 42px 34px;
    width: 100%;
    @media (min-width: 547px) {
        display: none;
    }
`;