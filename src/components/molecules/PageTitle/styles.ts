import styled, {css} from 'styled-components';
import {motion} from 'framer-motion';
type PageTitleContainerProps = {
    color: 'white' | 'black';
};

export const Line = styled(motion.div)`
    background-color: white;
    width: 100%;
    height: 1px;
`;

export const PageTitleContainer = styled(motion.div)<PageTitleContainerProps>`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 13px;
    ${({color}) =>
        color === 'black' &&
        css`
            color: black;
            ${Line} {
                background-color: black;
            }
        `}
`;

export const StyledText = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-transform: uppercase;
`;
