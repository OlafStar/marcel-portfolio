import {useEffect} from 'react';

import {ScrollNavigationContextType} from '.';

export default function useMouseWheelControl({
    next: nextScreen,
    previousScreen,
}: ScrollNavigationContextType<any>) {
    useEffect(() => {
        const handleMouseWheel = (event: WheelEvent) => {
            if (Math.abs(event.deltaY) > 30) {
                if (event.deltaY < 0) {
                    previousScreen();
                } else {
                    nextScreen();
                }
            }
        };

        document.addEventListener('wheel', handleMouseWheel);

        return () => {
            document.removeEventListener('wheel', handleMouseWheel);
        };
    }, [nextScreen, previousScreen]);
}
