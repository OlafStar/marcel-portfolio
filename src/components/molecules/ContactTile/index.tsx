import React, { useState } from 'react';
import {
    ContactTileContainer,
    DesktopWrapper,
    MobileWrapper,
    StyledLink,
    StyledText,
} from './styles';

type ContactTileProps = {
    svg: React.ReactNode;
    svgMobile: React.ReactNode;
    text: string;
    onClick?: () => void;
    href?: string;
    download?: string;
    target?: string;
};

const ContactTile = ({
    svg,
    svgMobile,
    text,
    onClick,
    href,
    download,
    target
}: ContactTileProps) => {
    return (
        <ContactTileContainer onClick={onClick}>
            <MobileWrapper>{svgMobile}</MobileWrapper>
            <DesktopWrapper>{svg}</DesktopWrapper>
            {href ? (
                <StyledLink href={href} download={download} target={target}>
                    {text}
                </StyledLink>
            ) : (
                <StyledText>{text}</StyledText>
            )}
        </ContactTileContainer>
    );
};

export default ContactTile;
