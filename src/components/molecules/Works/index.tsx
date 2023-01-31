import ImageButton from '../ImageModal/ImageButton';

import { WorksContainer } from './styles';

import naruto from '~public/icons/z2.png';
import sakura from '~public/icons/z5.png';
import mitsuki from '~public/icons/z7.png';
import dog from '~public/icons/z8.png';

const Works = () => {
    return (
        <WorksContainer>
            <ImageButton smallImgSrc={naruto.src} bigImgSrc={naruto.src} />
            <ImageButton smallImgSrc={sakura.src} bigImgSrc={sakura.src} />
            <ImageButton smallImgSrc={mitsuki.src} bigImgSrc={mitsuki.src} />
            <ImageButton smallImgSrc={dog.src} bigImgSrc={dog.src} />
        </WorksContainer>
    );
};

export default Works;
