import {motion} from 'framer-motion';
import styled, {css} from 'styled-components';

type ModalOverlayProps = {
    isOpen: boolean;
};

export const ModalOverlay = styled.div<ModalOverlayProps>`
    position: fixed;
    inset: 0 0 0 0;
    z-index: 100;
    pointer-events: none;

    ${({isOpen}) =>
        isOpen &&
        css`
            pointer-events: all;
        `}

    @media (max-width: 1266px) {
        --h-padding: 70px;
    }
    @media (max-width: 546px) {
        --h-padding: 35px;
    }
    --h-padding: calc((100vw - 1440px) / 2 + 156px);
`;

export const ModalContainer = styled(motion.div)`
    background: #ffffff;
    color: #000;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 12px;
    border-radius: 16px;
    width: calc(100% - (var(--h-padding) * 2));
    max-width: 450px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

export const CloseButton = styled.button`
    background: none;
    appearance: none;
    padding: 0;
    border: none;
    cursor: pointer;
    color: black;
    &:hover {
        background: none;
    }
`;
