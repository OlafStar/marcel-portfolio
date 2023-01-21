import PageTitle from '~components/molecules/PageTitle';
import useDocumentSize from '~hooks/useDocumentSize';
import {
    ContactPageContainer,
    ContentContainer,
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
import PdfMobile from '~public/icons/pdf-mobile.svg';
import ContactTile from '~components/molecules/ContactTile';
import {
    DesktopWrapper,
    MobileWrapper,
} from '~components/molecules/ContactTile/styles';

const ContactPage = () => {
    const {height} = useDocumentSize();
    return (
        <ContactPageContainer heightOfSite={height}>
            <PageTitle text="Skontaktuj się ze mną" color="black" />
            <ContentContainer>
                <MailContainer
                    onClick={() => copyToClipboard('hajdukmarceli@gmail.com')}
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
                        />
                        <ContactTile
                            svgMobile={<PdfMobile />}
                            svg={<Phone />}
                            text="Curriculum vitae"
                        />
                    </Row>
                    <Row>
                        <ContactTile
                            svgMobile={<PhoneMobile />}
                            svg={<Phone />}
                            text="668 469 410"
                        />
                    </Row>
                </TilesContainer>
            </ContentContainer>
        </ContactPageContainer>
    );
};

export default ContactPage;
