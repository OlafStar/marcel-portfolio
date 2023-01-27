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

const AboutPage = () => {
    const {height} = useDocumentSize();
    const scrollRef = usePreventPageScroll();
    return (
        <AboutPageContainer>
            <PageTitle text="O mnie" color="white" />
            <ContentContainer ref={scrollRef}>
                <ImageContainer
                    height={height}
                    exit={{x: -50, opacity: 0}}
                    initial={{x: -50, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{delay: 0.5}}
                >
                    <img src={marelGif.src} />
                </ImageContainer>
                <TextContainer>
                    <FirstLine
                        exit={{x: 50, opacity: 0}}
                        initial={{x: 50, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{delay: 0.7}}
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
                            exit={{x: 50, opacity: 0}}
                            initial={{x: 50, opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            transition={{delay: 0.8}}
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
                        exit={{x: 50, opacity: 0}}
                        initial={{x: 50, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{delay: 0.9}}
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
                            exit={{x: 50, opacity: 0}}
                            initial={{x: 50, opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            transition={{delay: 1.0}}
                        >
                            <LogoFigma />
                            <LogoAI />
                            <LogoPS />
                            <LogoAE />
                            <LogoBlender />
                            <LogoFLStudio />
                        </LogosSlider>
                    </MobileWrapper>
                    <ThirdLine
                        exit={{x: 50, opacity: 0}}
                        initial={{x: 50, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{delay: 1.1}}
                    >{`Pół swojego życia grałem w siatkówkę, poza tym lubię robić muzykę. Mix/master w FL Studio to mój drugi dom 🙂`}</ThirdLine>
                </TextContainer>
            </ContentContainer>
            <LogosSlider
                text={'Programy z których lubię korzystać'}
                bottom={40}
                left={70}
                exit={{x: -50, opacity: 0}}
                initial={{x: -50, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{delay: 0.6}}
            >
                <LogoFigma />
                <LogoAI />
                <LogoPS />
                <LogoAE />
                <LogoBlender />
                <LogoFLStudio />
            </LogosSlider>
            <LogosSlider
                text={'Programy z których lubię korzystać'}
                bottom={40}
                right={70}
                exit={{x: 50, opacity: 0}}
                initial={{x: 50, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{delay: 0.6}}
            >
                <LogoFigma />
                <LogoAI />
                <LogoPS />
                <LogoAE />
                <LogoBlender />
                <LogoFLStudio />
            </LogosSlider>
        </AboutPageContainer>
    );
};

export default AboutPage;
