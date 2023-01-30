import {useEffect, useRef} from 'react';

import {shouldIgnoreEvent} from './useMouseDragControl';

export default function useTouchDragControl({
    next: nextScreen,
    previousScreen,
    isPrevented,
}: {
    next: () => void;
    previousScreen: () => void;
    isPrevented?: boolean;
}) {
    const touchStartPositionRef = useRef<number | null>(null);

    useEffect(() => {
        const handleTouchStart = (event: TouchEvent) => {
            if (shouldIgnoreEvent(event)) {
                return;
            }

            if (event.touches.length === 1) {
                touchStartPositionRef.current = event.touches[0].screenY;
            } else {
                touchStartPositionRef.current = null;
            }
        };

        const handleTouchEnd = (event: TouchEvent) => {
            if (touchStartPositionRef.current === null) {
                return;
            }

            if (!shouldIgnoreEvent(event)) {
                const diff =
                    event.changedTouches[0].screenY - touchStartPositionRef.current;
                if (Math.abs(diff) > 100) {
                    if (diff < 0) {
                        nextScreen();
                    } else {
                        previousScreen();
                    }
                }
            }

            touchStartPositionRef.current = null;
        };

        if (!isPrevented) {
            document.addEventListener('touchstart', handleTouchStart, false);
            document.addEventListener('touchend', handleTouchEnd, false);

            return () => {
                document.removeEventListener('touchstart', handleTouchStart, false);
                document.removeEventListener('touchend', handleTouchEnd, false);
            };
        }
        if (isPrevented) {
            document.removeEventListener('touchstart', handleTouchStart, false);
            document.removeEventListener('touchend', handleTouchEnd, false);
        }
    }, [nextScreen, previousScreen, isPrevented]);
}
