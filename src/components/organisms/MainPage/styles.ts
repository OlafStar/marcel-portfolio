import {motion} from 'framer-motion';
import styled from 'styled-components';

export const MainPageContainer = styled(motion.section)`
    width: 100%;
    height: 100%;
    background-color: #2b3135;
    color: white;
    position: relative;
    overflow: hidden;
`;

type DesktopContentContainerProps = {
    heightOfSite: number;
};

export const DesktopContentContainer = styled(
    motion.div,
)<DesktopContentContainerProps>`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 77px;
    flex-direction: column;
    padding-top: ${({heightOfSite}) =>
        heightOfSite &&
        `${heightOfSite * 0.15625 > 160 ? 160 : heightOfSite * 0.15625}px`};
    @media (max-width: 546px) {
        display: none;
    }
`;

export const Content = styled.div`
    width: fit-content;
    position: relative;
    height: 464px;
`;

export const Name = styled.div`
    position: relative;
    padding: 0 70px;
    font-size: 80px;
    font-weight: 800;
    line-height: 101px;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    text-align: center;
    z-index: 2;
    @media (max-width: 847px) {
        font-size: 60px;
    }
    @media (max-width: 546px) {
        font-size: 40px;
        font-weight: 800;
        line-height: 61px;
        letter-spacing: 0em;
        padding: 0;
    }
    @media (max-width: 410px) {
        font-size: 30px;
        font-weight: 800;
        line-height: 51px;
        letter-spacing: 0em;
        padding: 0;
    }
`;

export const NameDescription = styled.div`
    position: relative;
    font-size: 40px;
    font-weight: 200;
    line-height: 50px;
    letter-spacing: 0em;
    text-align: center;
    z-index: 2;
    top: -18px;
    @media (max-width: 546px) {
        font-size: 21px;
        font-weight: 200;
        line-height: 27px;
        letter-spacing: 0em;
    }
`;

export const BackgroundImage = styled.img`
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    z-index: 1;
    border-radius: 30px;
`;

export const MeImage = styled.img`
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    z-index: 3;
`;

export const TextContainer = styled(motion.div)`
    padding-top: 14px;
    @media (max-width: 546px) {
        padding: 0;
        position: absolute;
        width: 100%;
        bottom: 320px;
    }
`;

export const Description = styled(motion.div)`
    font-family: Plus Jakarta Sans;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;

    @media (max-width: 546px) {
        position: absolute;
        top: 532px;
        width: 100%;
        text-align: center;
    }
`;

export const MobileContentContainer = styled(motion.div)`
    position: relative;
    height: 506px;
    @media (min-width: 547px) {
        display: none;
    }
`;

export const MeImageMobile = styled(motion.img)`
    position: absolute;
    top: 0px;
    left: 0;
    z-index: 3;
`;

type ImageContainerProps = {
    left: number;
};

export const ImageContainer = styled(motion.div)<ImageContainerProps>`
    position: absolute;
    top: -222px;
    left: ${({left}) => left && `${left}px`};
`;
