import PageTitle from '~components/molecules/PageTitle';
import useDocumentSize from '~hooks/useDocumentSize';
import {
    BgAnimationDiv,
    ContactPageContainer,
    ContentContainer,
    CopyPopUp,
    MailContainer,
    Row,
    TilesContainer,
} from './styles';
import MailMobile from '~public/icons/email-mobile.svg';
import Mail from '~public/icons/email.svg';
import {copyToClipboard} from '~utils/copyToClipboard';
import LinkedIn from '~public/icons/linkedIn.svg';
import Phone from '~public/icons/phone.svg';
import LinkedInMobile from '~public/icons/linkedIn-mobile.svg';
import PhoneMobile from '~public/icons/phone-mobile.svg';
import PdfDesktop from '~public/icons/pdf-desktop.svg';
import PdfMobile from '~public/icons/pdf-mobile.svg';
import BehanceDesktop from '~public/icons/behance.svg';
import ContactTile from '~components/molecules/ContactTile';
import {
    DesktopWrapper,
    MobileWrapper,
} from '~components/molecules/ContactTile/styles';
import {AnimatePresence, easeInOut, useIsPresent} from 'framer-motion';
import {useScrollNavigation} from '~providers/ScrollNavigation';
import {useEffect, useMemo, useState} from 'react';
import useMouseWheelControl from '~providers/ScrollNavigation/useMouseWheelControl';
import useTouchDragControl from '~providers/ScrollNavigation/useTouchDragControl';

const ContactPage = () => {
    const {height} = useDocumentSize();
    const {screen, previous, previousScreen, next} = useScrollNavigation();
    const [showPopUp, setShowPopUp] = useState(false);

    const isPresent = useIsPresent();

    const exitDelay = useMemo(() => {
        if (isPresent && previous === 'home')
            return {titleDelay: 1.5, contentDelay: 2, bgDelay: 1};
        if (isPresent && previous === 'projects')
            return {titleDelay: 1.5, contentDelay: 2, bgDelay: 1};
        if (isPresent && previous === 'about')
            return {titleDelay: 1.5, contentDelay: 2, bgDelay: 1};

        return {titleDelay: 0, contentDelay: 0, bgDelay: 1};
    }, [isPresent, previous]);

    const bgAnimationPosition = useMemo(() => {
        if (
            (isPresent && previous === 'home') ||
            (isPresent && previous === 'projects')
        )
            return {y: '-100%'};
        if (screen === 'about' && previous === 'contact') return {y: '-100%'};
        if (isPresent && previous === 'about') return {y: '100%'};
    }, [screen, previous, isPresent]);

    useEffect(() => {
        setTimeout(() => {
            setShowPopUp(false);
        }, 3000);
    }, [setShowPopUp, showPopUp]);

    useMouseWheelControl({next, previousScreen});
    useTouchDragControl({next, previousScreen});

    return (
        <ContactPageContainer heightOfSite={height}>
            <PageTitle
                text="Skontaktuj się ze mną"
                color="black"
                delay={exitDelay.titleDelay}
                secondaryText="Kliknij mail"
            />
            <ContentContainer
                exit={{y: 50, opacity: 0}}
                initial={{y: 50, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{delay: exitDelay.contentDelay}}
            >
                <MailContainer
                    onClick={() => {
                        setShowPopUp(true);
                        copyToClipboard('hajdukmarceli@gmail.com');
                    }}
                >
                    <MobileWrapper>
                        <MailMobile />
                    </MobileWrapper>
                    <DesktopWrapper>
                        <Mail />
                    </DesktopWrapper>
                </MailContainer>
                <TilesContainer>
                    <Row>
                        <ContactTile
                            svg={<LinkedIn />}
                            svgMobile={<LinkedInMobile />}
                            text="linkedin.com/in/marceli-hajduk-760724253"
                            href="https://linkedin.com/in/marceli-hajduk-760724253"
                            target="_blank"
                        />
                        <ContactTile
                            svgMobile={<PdfMobile />}
                            svg={<PdfDesktop />}
                            text="Curriculum vitae"
                            href={'cv.pdf'}
                            download={'cv.pdf'}
                        />
                    </Row>
                    <Row>
                        <ContactTile
                            svgMobile={<PhoneMobile />}
                            svg={<Phone />}
                            text="668 469 410"
                        />
                        <ContactTile
                            svgMobile={<BehanceDesktop />}
                            svg={<BehanceDesktop />}
                            href="https://behance.net/marcelihajduk"
                            text="behance.net/marcelihajduk"
                            target='_blank'
                        />
                    </Row>
                </TilesContainer>
            </ContentContainer>
            {previous && (
                <BgAnimationDiv
                    exit={{y: 0}}
                    initial={{y: 0}}
                    animate={{y: bgAnimationPosition?.y}}
                    transition={{
                        duration: 0.5,
                        ease: easeInOut,
                        delay: exitDelay.bgDelay,
                    }}
                />
            )}
            <AnimatePresence>
                {showPopUp && (
                    <CopyPopUp
                        exit={{opacity: 0}}
                        initial={{opacity: 0, bottom: 0, left: '50%'}}
                        animate={{opacity: 1, bottom: '30px'}}
                    >
                        {'Skopiowano'}
                    </CopyPopUp>
                )}
            </AnimatePresence>
        </ContactPageContainer>
    );
};

export default ContactPage;
