import ImageButton from '../ImageModal/ImageButton';

import {WorksContainer} from './styles';

import naruto from '~public/icons/z2.png';
import sakura from '~public/icons/z5.png';
import mitsuki from '~public/icons/z7.png';
import dog from '~public/icons/z8.png';
import z1 from '~public/icons/z1.png';
import z3 from '~public/icons/z3.png';
import z4 from '~public/icons/z4.png';
import z6 from '~public/icons/z6.png';

const Works = () => {
    return (
        <WorksContainer>
            <ImageButton smallImgSrc={naruto.src} bigImgSrc={naruto.src} />
            <ImageButton smallImgSrc={sakura.src} bigImgSrc={sakura.src} />
            <ImageButton smallImgSrc={mitsuki.src} bigImgSrc={mitsuki.src} />
            <ImageButton smallImgSrc={dog.src} bigImgSrc={dog.src} />
            <ImageButton smallImgSrc={z1.src} bigImgSrc={z1.src} />
            <ImageButton smallImgSrc={z3.src} bigImgSrc={z3.src} />
            <ImageButton smallImgSrc={z4.src} bigImgSrc={z4.src} />
            <ImageButton smallImgSrc={z6.src} bigImgSrc={z6.src} />
        </WorksContainer>
    );
};

export default Works;
