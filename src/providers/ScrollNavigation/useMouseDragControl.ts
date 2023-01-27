import {useEffect, useRef} from 'react';

import {ScrollNavigationContextType} from '.';

export function shouldIgnoreEvent(event: MouseEvent | TouchEvent) {
    if (
        event.target instanceof Element &&
        event.target.getAttribute('data-ignore-scroll')
    ) {
        return true;
    }

    return false;
}

export default function useMouseDragControl({
    next: nextScreen,
    previousScreen,
}: ScrollNavigationContextType<any>) {
    const mouseStartPositionRef = useRef<number | null>(null);

    useEffect(() => {
        const handleMouseDown = (event: MouseEvent) => {
            if (shouldIgnoreEvent(event)) {
                return;
            }

            mouseStartPositionRef.current = event.screenY;
        };

        const handleMouseUp = (event: MouseEvent) => {
            if (mouseStartPositionRef.current === null) {
                return;
            }

            if (!shouldIgnoreEvent(event)) {
                const diff = event.screenY - mouseStartPositionRef.current;

                if (Math.abs(diff) > 200) {
                    if (diff < 0) {
                        nextScreen();
                    } else {
                        previousScreen();
                    }
                }
            }

            mouseStartPositionRef.current = null;
        };

        document.addEventListener('mousedown', handleMouseDown, false);
        document.addEventListener('mouseup', handleMouseUp, false);

        return () => {
            document.removeEventListener('mousedown', handleMouseDown, false);
            document.removeEventListener('mouseup', handleMouseUp, false);
        };
    }, [nextScreen, previousScreen]);
}
