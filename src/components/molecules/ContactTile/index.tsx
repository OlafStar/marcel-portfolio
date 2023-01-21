import React from 'react';
import {
    ContactTileContainer,
    DesktopWrapper,
    MobileWrapper,
    StyledText,
} from './styles';

type ContactTileProps = {
    svg: React.ReactNode;
    svgMobile: React.ReactNode;
    text: string;
    onClick?: () => void;
};

const ContactTile = ({svg, svgMobile, text, onClick}: ContactTileProps) => {
    return (
        <ContactTileContainer onClick={onClick}>
            <MobileWrapper>{svgMobile}</MobileWrapper>
            <DesktopWrapper>{svg}</DesktopWrapper>
            <StyledText>{text}</StyledText>
        </ContactTileContainer>
    );
};

export default ContactTile;
