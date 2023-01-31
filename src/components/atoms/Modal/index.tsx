import {ReactNode, useEffect, useState} from 'react';
import {createPortal} from 'react-dom';

import {CloseButton, ModalContainer, ModalOverlay} from './styles';

import CloseIcon from '~public/icons/icon-close.svg';

export type ModalProps = {
    isOpen: boolean;
    title?: string;
    close?: () => void;
    children?: ReactNode;
};

const ModalRoot = ({isOpen, children, close}: ModalProps) => {
    return (
        <ModalOverlay isOpen={isOpen}>
            {isOpen && (
                <ModalContainer key="modal">
                    {close && (
                        <CloseButton onClick={close}>
                            <CloseIcon />
                        </CloseButton>
                    )}
                    {children}
                </ModalContainer>
            )}
        </ModalOverlay>
    );
};

export const Modal = ({rootId, ...props}: ModalProps & {rootId: string}) => {
    const [root, setRoot] = useState<HTMLElement | null>(null);

    useEffect(() => {
        setRoot(document.getElementById(rootId));
    }, [rootId]);

    return root === null ? null : createPortal(<ModalRoot {...props} />, root);
};
