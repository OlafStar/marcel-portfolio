import {
    BackgroundImage,
    Content,
    NameDescription,
    MainPageContainer,
    MeImage,
    Name,
    TextContainer,
    Description,
    DesktopContentContainer,
    MobileContentContainer,
    MeImageMobile,
    ImageContainer,
} from './styles';
import bg from '~public/icons/background.png';
import bgMobile from '~public/icons/background-mobile.png';
import me from '~public/icons/me.png';
import meMobile from '~public/icons/me-mobile.png';
import useDocumentSize from '~hooks/useDocumentSize';
import {useMemo} from 'react';
import {useIsPresent} from 'framer-motion';
import {useScrollNavigation} from '~providers/ScrollNavigation';
import useMouseWheelControl from '~providers/ScrollNavigation/useMouseWheelControl';
import useTouchDragControl from '~providers/ScrollNavigation/useTouchDragControl';
import {motion} from 'framer-motion';

const MainPage = () => {
    const {width, height} = useDocumentSize();

    const leftPositionOfImage = useMemo(() => {
        return width - 546;
    }, [width]);

    const isPresent = useIsPresent();
    const {previous, next, previousScreen} = useScrollNavigation();

    useMouseWheelControl({next, previousScreen});
    useTouchDragControl({next, previousScreen});

    return (
        <MainPageContainer>
            <DesktopContentContainer
                heightOfSite={height}
                exit={{opacity: 0, y: -90}}
                initial={{opacity: 0, y: -90}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: isPresent && previous ? 1.5 : 0}}
            >
                <Content>
                    <TextContainer>
                        <Name>{'Marceli Hajduk'}</Name>
                        <NameDescription>{'UI/UX DESIGNER'}</NameDescription>
                    </TextContainer>
                    <BackgroundImage src={bg.src} />
                    <MeImage src={me.src} />
                </Content>
                <Description>{'sometimes less is more'}</Description>
            </DesktopContentContainer>
            <MobileContentContainer exit={{opacity: 0}}>
                <TextContainer
                    initial={{opacity: 0, zIndex: 2}}
                    animate={{opacity: 1}}
                    transition={{delay: previous ? 1.25 : 0.25}}
                >
                    <Name>{'Marceli Hajduk'}</Name>
                    <NameDescription>{'UI/UX DESIGNER'}</NameDescription>
                </TextContainer>
                <ImageContainer left={leftPositionOfImage / 2}>
                    <motion.img
                        src={bgMobile.src}
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{duration: 0.2, delay: previous ? 1 : 0}}
                    />
                    <MeImageMobile
                        src={meMobile.src}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: previous ? 1.75 : 1}}
                    />
                </ImageContainer>
                <Description
                    initial={{opacity: 0, y: 25}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: previous ? 2 : 1.25, duration: 0.3}}
                >
                    {'sometimes less is more'}
                </Description>
            </MobileContentContainer>
        </MainPageContainer>
    );
};

export default MainPage;
