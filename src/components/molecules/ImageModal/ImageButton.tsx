import {useState} from 'react';
import {ModalProps} from '~components/atoms/Modal';
import ImageModal from '.';
import {StyledButton} from './styles';

type ImageModalProps = {
    bigImgSrc: string;
    smallImgSrc: string;
};

const ImageButton = ({bigImgSrc, smallImgSrc}: ImageModalProps) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <StyledButton
            onClick={() => {
                setIsOpen(!isOpen);
            }}
        >
            <img src={smallImgSrc} />
            <ImageModal
                imgSrc={bigImgSrc}
                isOpen={isOpen}
                close={() => {
                    setIsOpen(!isOpen);
                }}
            />
        </StyledButton>
    );
};

export default ImageButton;
