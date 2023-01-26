import React, {useState} from 'react';
import {motion} from 'framer-motion';
import useTiltEffect from '~hooks/useTiltEffect';

const ImageTilt = ({src}: {src: string}) => {
    const [isHovered, setIsHovered] = useState(false);
    const {wrapper, onMouseMove, rotateX, rotateY} = useTiltEffect();

    console.log(rotateX)
    return (
        <motion.div
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            ref={wrapper}
            onMouseMove={onMouseMove}
            whileHover={{
                rotateX: rotateX,
                rotateY: rotateY,
            }}
        >
            <img src={src} alt="Tilt" />
        </motion.div>
    );
};

export default ImageTilt;
