import {motion} from 'framer-motion';
import styled, {css} from 'styled-components';

type BottomContainerProps = {
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
    margin?: string;
};

export const LogosAndText = styled(motion.div)<BottomContainerProps>`
    ${({top, bottom, left, right}) =>
        Boolean(top || bottom || left || right) &&
        css`
            position: absolute;

            @media (max-width: 790px) {
                display: none;
            }
        `};
    margin: ${({margin}) => margin && margin};
    display: flex;
    flex-direction: column;
    gap: 16px;
    bottom: ${({bottom}) => bottom && `${bottom}px`};
    left: ${({left}) => left && `${left}px`};
    right: ${({right}) => right && `${right}px`};
    top: ${({top}) => top && `${top}px`};
`;

export const LogosContainer = styled.div``;
