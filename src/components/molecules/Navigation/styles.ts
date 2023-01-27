import styled from 'styled-components';

export const NavigationContainer = styled.div`
    position: fixed;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
`;

export const RelativeWrapper = styled.div`
    position: relative;
    display: flex;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding-right: 8px;
`;

export const StyledButton = styled.div`
    cursor: pointer;
    position: relative;
    .line {
        width: 10px;
        height: 40px;
        border-radius: 10px 0px 0px 10px;
        background-color: white;
        position: absolute;
        right: -18px;
        top: -10px;
        z-index: 10;
    }
`;

export const LineContainer = styled.div`
    width: 10px;
    height: 100%;
`;
