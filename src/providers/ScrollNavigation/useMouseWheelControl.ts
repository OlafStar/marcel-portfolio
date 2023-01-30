import {useEffect} from 'react';

import {ScrollNavigationContextType} from '.';

export default function useMouseWheelControl({
    next: nextScreen,
    previousScreen,
    isPrevented,
}: {
    next: () => void;
    previousScreen: () => void;
    isPrevented?: boolean;
}) {
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
        if (!isPrevented) {
            document.addEventListener('wheel', handleMouseWheel);

            return () => {
                document.removeEventListener('wheel', handleMouseWheel);
            };
        }
        if (isPrevented) {
            document.removeEventListener('wheel', handleMouseWheel);
        }
    }, [nextScreen, previousScreen, isPrevented]);
}
