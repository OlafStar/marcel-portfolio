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
import Logo from '~public/icons/logo.svg';
import LogoMobile from '~public/icons/logo-mobile.svg';
import bg from '~public/icons/background.png';
import bgMobile from '~public/icons/background-mobile.png';
import me from '~public/icons/me.png';
import meMobile from '~public/icons/me-mobile.png';
import useDocumentSize from '~hooks/useDocumentSize';
import {useMemo} from 'react';
import {AnimatePresence} from 'framer-motion';

const MainPage = () => {
    const {width, height} = useDocumentSize();

    const leftPositionOfImage = useMemo(() => {
        return width - 546;
    }, [width]);
    return (
        <MainPageContainer>
            <DesktopContentContainer
                heightOfSite={height}
                exit={{opacity: 0, y: -90}}
                initial={{opacity: 0, y: -90}}
                animate={{opacity: 1, y: 0}}
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
            <MobileContentContainer>
                <TextContainer>
                    <Name>{'Marceli Hajduk'}</Name>
                    <NameDescription>{'UI/UX DESIGNER'}</NameDescription>
                </TextContainer>
                <ImageContainer left={leftPositionOfImage / 2}>
                    <img src={bgMobile.src} />
                    <MeImageMobile src={meMobile.src} />
                </ImageContainer>
            </MobileContentContainer>
        </MainPageContainer>
    );
};

export default MainPage;
