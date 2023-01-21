import {useEffect, useRef} from 'react';

export function usePreventPageScroll() {
    const elRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const el = elRef.current;
        if (el) {
            const onWheel = (e: any) => {
                if (e.deltaY === 0) return;
                e.preventDefault();
                el.scrollTo({
                    top: el.scrollTop + e.deltaY,
                    // behavior: 'smooth',
                });
            };
            el.addEventListener('wheel', onWheel);
            return () => el.removeEventListener('wheel', onWheel);
        }
    }, []);
    return elRef;
}
