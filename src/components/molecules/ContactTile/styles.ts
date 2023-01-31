import styled from 'styled-components';

export const ContactTileContainer = styled.div`
    display: flex;
    gap: 34px;
    align-items: center;
`;

export const StyledText = styled.div`
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    @media (max-width: 645px) {
        font-weight: 600;
        font-size: 13.7692px;
        line-height: 17px;
    }
`;

export const StyledLink = styled.a`
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    @media (max-width: 645px) {
        font-weight: 600;
        font-size: 13.7692px;
        line-height: 17px;
    }
`;

export const MobileWrapper = styled.div`
    display: block;
    @media (min-width: 1006px) {
        display: none;
    }
`;
export const DesktopWrapper = styled.div`
    display: block;
    @media (max-width: 1005px) {
        display: none;
    }
`;
