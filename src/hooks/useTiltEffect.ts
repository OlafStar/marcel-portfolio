import {MouseEvent, useRef, useState} from 'react';

export default function useTiltEffect() {
    const wrapper = useRef<HTMLDivElement>(null!);
    const [rotates, setRotates] = useState({
        rotateX: 0,
        rotateY: 0,
    });

    const onMouseMove = (e: MouseEvent<HTMLElement>) => {
        const rect = wrapper.current.getBoundingClientRect();
        const mouseX = e.clientX - (rect.left + rect.width / 2);
        const mouseY = e.clientY - (rect.top + rect.height / 2);
        const rotateX = (mouseY / rect.height / 2).toFixed(2);
        const rotateY = (mouseX / rect.width / 2).toFixed(2);

        setRotates({rotateX: Number(rotateX), rotateY: Number(rotateY)});
    };

    return {
        ...rotates,
        onMouseMove,
        wrapper,
    };
}
