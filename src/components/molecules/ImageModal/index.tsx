import {Modal, ModalProps} from '~atoms/Modal';

type ImageModalProps = Pick<ModalProps, 'isOpen' | 'close'>;
const ImageModal = ({isOpen, close, imgSrc}: ImageModalProps & {imgSrc: string}) => {
    return (
        <Modal rootId={'image-modal'} isOpen={isOpen} close={close}>
            <img src={imgSrc} />
        </Modal>
    );
};

export default ImageModal;
