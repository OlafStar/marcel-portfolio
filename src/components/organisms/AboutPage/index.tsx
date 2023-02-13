import PageTitle from '~components/molecules/PageTitle';
import {
    AboutPageContainer,
    ContentContainer,
    FirstLine,
    ImageContainer,
    MobileWrapper,
    SecondLine,
    TextContainer,
    ThirdLine,
} from './styles';
import marelGif from '~public/icons/animacja.gif';
import LogoPS from '~public/icons/logos_adobe-photoshop.svg';
import LogoAE from '~public/icons/logos_after_efects.svg';
import LogoFigma from '~public/icons/logos_figma.svg';
import LogoAI from '~public/icons/logos_ilustrator.svg';
import LogoBlender from '~public/icons/logos_blender.svg';
import LogoFLStudio from '~public/icons/logos_fl-studio.svg';
import useDocumentSize from '~hooks/useDocumentSize';
import {usePreventPageScroll} from '~hooks/usePreventPageScroll';
import LogosSlider from '~components/molecules/LogosSlider';
import {useIsPresent} from 'framer-motion';
import {useScrollNavigation} from '~providers/ScrollNavigation';
import {useMemo} from 'react';
import useMouseWheelControl from '~providers/ScrollNavigation/useMouseWheelControl';
import useTouchDragControl from '~providers/ScrollNavigation/useTouchDragControl';
import Works from '~components/molecules/Works';

const AboutPage = () => {
    const {height} = useDocumentSize();
    const scrollRef = usePreventPageScroll();

    const isPresent = useIsPresent();

    const {previous, next, previousScreen} = useScrollNavigation();

    const exitDelay = useMemo(() => {
        if (isPresent && previous === 'home')
            return {titleDelay: 0.5, imageDelay: 1, textDelay: 1, sliderDelay: 1.5};
        if (isPresent && previous === 'projects')
            return {titleDelay: 0.5, imageDelay: 1, textDelay: 1, sliderDelay: 1.5};
        if (isPresent && previous === 'contact')
            return {titleDelay: 1.5, imageDelay: 2, textDelay: 2, sliderDelay: 2.5};
        return {titleDelay: 0, imageDelay: 0, textDelay: 0, sliderDelay: 0};
    }, [isPresent, previous]);

    useMouseWheelControl({next, previousScreen});
    useTouchDragControl({next, previousScreen});

    return (
        <AboutPageContainer>
            <PageTitle text="O mnie" color="white" delay={exitDelay.titleDelay} />
            <ContentContainer ref={scrollRef}>
                <ImageContainer
                    height={height}
                    exit={{opacity: 0}}
                    initial={{x: -50, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{delay: exitDelay.imageDelay}}
                >
                    <img src={marelGif.src} />
                </ImageContainer>
                <TextContainer>
                    <FirstLine
                        exit={{opacity: 0}}
                        initial={{x: 50, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{delay: exitDelay.textDelay}}
                    >
                        {
                            'Cześć! Nazywam się Marceli, a projektowanie sprawia mi przyjemność. Od stron, przez grafiki, aż po ciuchy 😎'
                        }
                    </FirstLine>
                    <MobileWrapper>
                        <LogosSlider
                            text={'Programy z których lubię korzystać'}
                            margin="20px 0"
                            isMobile
                            exit={{opacity: 0}}
                            initial={{x: 50, opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            transition={{delay: exitDelay.textDelay}}
                        >
                            <LogoFigma />
                            <LogoAI />
                            <LogoPS />
                            <LogoAE />
                            <LogoBlender />
                            <LogoFLStudio />
                        </LogosSlider>
                    </MobileWrapper>
                    <SecondLine
                        exit={{opacity: 0}}
                        initial={{x: 50, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{delay: exitDelay.textDelay}}
                    >
                        {
                            'Od zawsze interesuje się szatą graficzną, stąd moje zainteresowanie do takich programów jak Adobe Photoshop czy Illustrator. Lubię eksperymentować również w takich programach jak After Effects oraz Blender. Stąd wzięła się moja sympatia do Figmy, ponieważ dzięki znajomości wyżej wymienionych środowisk czułem się jak ryba w wodzie.'
                        }
                    </SecondLine>
                    <MobileWrapper>
                        <LogosSlider
                            text={'Programy z których lubię korzystać'}
                            margin="0 0 8px 0"
                            isMobile
                            exit={{opacity: 0}}
                            initial={{x: 50, opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            transition={{delay: exitDelay.textDelay}}
                        >
                            <Works />
                        </LogosSlider>
                    </MobileWrapper>
                    <ThirdLine
                        exit={{opacity: 0}}
                        initial={{x: 50, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{delay: exitDelay.textDelay}}
                    >{`Pół swojego życia grałem w siatkówkę, poza tym lubię robić muzykę. Mix/master w FL Studio to mój drugi dom 🙂`}</ThirdLine>
                </TextContainer>
            </ContentContainer>
            <LogosSlider
                text={'Programy z których lubię korzystać'}
                bottom={40}
                left={70}
                exit={{opacity: 0}}
                initial={{x: -50, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{delay: exitDelay.sliderDelay}}
            >
                <LogoFigma />
                <LogoAI />
                <LogoPS />
                <LogoAE />
                <LogoBlender />
                <LogoFLStudio />
            </LogosSlider>
            <LogosSlider
                text={'Pare prac które robiłem z zajawki'}
                bottom={40}
                right={70}
                exit={{opacity: 0}}
                initial={{x: 50, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{delay: exitDelay.sliderDelay}}
            >
                <Works />
            </LogosSlider>
        </AboutPageContainer>
    );
};

export default AboutPage;
