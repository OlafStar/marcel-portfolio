import {useEffect} from 'react';

import {ScrollNavigationContextType} from '.';

export default function useKeyboardControl({
    next: nextScreen,
    previousScreen,
}: ScrollNavigationContextType<any>) {
    useEffect(() => {
        const handleKeydown = (event: KeyboardEvent) => {
            if (event.target !== document.body) {
                return;
            }

            if (['ArrowDown', 'ArrowRight', 's', 'd'].includes(event.key)) {
                nextScreen();
            }

            if (['ArrowUp', 'ArrowLeft', 'w', 'a'].includes(event.key)) {
                previousScreen();
            }
        };

        document.addEventListener('keydown', handleKeydown);

        return () => {
            document.removeEventListener('keydown', handleKeydown);
        };
    }, [nextScreen, previousScreen]);
}
