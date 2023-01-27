import {motion} from 'framer-motion';
import styled from 'styled-components';

export const AboutPageContainer = styled(motion.section)`
    width: 100%;
    height: 100%;
    background-color: #2b3135;
    color: white;
    padding: 0 var(--h-padding) 40px var(--h-padding);
    display: flex;
    flex-direction: column;
    gap: 22px;
    justify-content: center;
    position: relative;

    @media (max-width: 790px) {
        padding: 120px var(--h-padding) 40px var(--h-padding);
        justify-content: flex-start;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    color: white;

    @media (max-width: 790px) {
        justify-content: flex-start;
    }
`;

type ImageContainerProps = {
    height: number;
};

export const ImageContainer = styled(motion.div)<ImageContainerProps>`
    img {
        height: ${({height}) => height && `${height * 0.4697265625}px`};
        max-width: 350px;
        max-height: 480px;
    }
    @media (max-width: 790px) {
        height: fit-content;
        img {
            width: 100%;
            max-width: 350px;
            height: auto;
        }
    }
`;

export const ContentContainer = styled.div`
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-template-rows: 1fr;
    column-gap: 70px;

    @media (max-width: 790px) {
        grid-template-columns: 1fr;
        grid-template-rows: max-content 1fr;
        column-gap: 0px;
        justify-items: center;
        row-gap: 50px;
        overflow-y: scroll;

        ::-webkit-scrollbar {
            display: none;
        }
    }
`;

export const FirstLine = styled(motion.div)`
    max-width: 500px;
`;

export const SecondLine = styled(motion.div)``;

export const ThirdLine = styled(motion.div)`
    max-width: 310px;
`;

export const FlexItem = styled.div`
    flex: 1;
`;

export const MobileWrapper = styled.div`
    display: none;
    @media (max-width: 790px) {
        display: block;
    }
`;
