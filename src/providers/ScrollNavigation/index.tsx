import {useRouter} from 'next/router';
import React, {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import {usePrevious} from 'react-use';
import {Screens} from '~components/organisms/Homepage';

import useKeyboardControl from './useKeyboardControl';
import useMouseDragControl from './useMouseDragControl';
import useMouseWheelControl from './useMouseWheelControl';
import useTouchDragControl from './useTouchDragControl';

type ScrollNavigationProviderProps<T extends string> = {
    screens: readonly T[];
    children: ReactNode;
};

type Reasons = 'next' | 'previous' | 'navigation' | 'inView';

export type ScrollNavigationContextType<T extends string> = {
    screens: readonly T[];
    screen: T;
    previous: T | null | undefined;
    direction: 'up' | 'down';
    screenIndex: number;
    changeReason: Reasons | undefined;
    next: () => void;
    previousScreen: () => void;
    setScreen: (screenOrIndex: T | number, reason?: Reasons) => void;
};

// @ts-ignore
const ScrollNavigationContext = createContext<ScrollNavigationContextType>(null);

export function useScrollNavigation<
    T extends string = Screens,
>(): ScrollNavigationContextType<T> {
    return useContext(ScrollNavigationContext);
}

const ScrollNavigationProvider = <T extends string>({
    screens,
    children,
}: ScrollNavigationProviderProps<T>) => {
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const router = useRouter();

    const changeReason = useRef<Reasons | undefined>(undefined);

    const [screenIndex, _setScreenIndex] = useState<number>(() =>
        Math.max(screens.indexOf(router.query.screen?.[0] as T), 0),
    );

    const previousScreenIndex = usePrevious(screenIndex);

    const setScreenIndex = useCallback(
        (index: number | ((current: number) => number), reason?: Reasons) => {
            if (timeoutRef.current === null) {
                const debounceTime = 1000;

                timeoutRef.current = setTimeout(() => {
                    timeoutRef.current = null;
                }, debounceTime);

                changeReason.current = reason;

                return _setScreenIndex(index);
            }
        },
        [_setScreenIndex],
    );

    const screen = useMemo(() => screens[screenIndex], [screenIndex, screens]);

    const previous = usePrevious(screen);

    const setScreen = useCallback<ScrollNavigationContextType<T>['setScreen']>(
        (screenOrIndex, reason?) => {
            if (typeof screenOrIndex === 'number') {
                if (screenOrIndex >= screens.length) {
                    throw new RangeError(
                        `Screen index ${screenOrIndex} out of range`,
                    );
                }

                setScreenIndex(screenOrIndex, reason);
            } else {
                const index = screens.indexOf(screenOrIndex);
                if (index === -1) {
                    throw new RangeError(`Screen ${screenOrIndex} does not exist`);
                }

                setScreenIndex(index, reason);
            }
        },
        [setScreenIndex, screens],
    );

    const nextScreen = useCallback<ScrollNavigationContextType<T>['next']>(() => {
        setScreenIndex(
            (current) => Math.min(current + 1, screens.length - 1),
            'next',
        );
    }, [setScreenIndex, screens]);

    const previousScreen = useCallback<
        ScrollNavigationContextType<T>['previousScreen']
    >(() => {
        setScreenIndex((current) => Math.max(current - 1, 0), 'previous');
    }, [setScreenIndex, screens]);

    const contextValue = useMemo<ScrollNavigationContextType<T>>(
        () => ({
            screens,
            screen,
            screenIndex,
            previous,
            changeReason: changeReason.current,
            direction: screenIndex - (previousScreenIndex || 0) >= 0 ? 'down' : 'up',
            setScreen,
            next: nextScreen,
            previousScreen,
        }),
        [
            screens,
            screen,
            screenIndex,
            previous,
            previousScreenIndex,
            setScreen,
            nextScreen,
            previousScreen,
        ],
    );

    useKeyboardControl(contextValue);
    useMouseDragControl(contextValue);

    useEffect(() => {
        setScreen((router.query.screen?.[0] as T) || screens[0], 'navigation');
    }, [router.query.screen]);

    useEffect(() => {
        if (changeReason.current !== 'navigation') {
            window.history.replaceState(
                undefined,
                '',
                `/${screenIndex === 0 ? '' : screen}`,
            );
        }

        if (changeReason.current === 'navigation') {
            setTimeout(() => {
                const element = document.getElementById(screen);
                if (element) {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                }
            }, 100);
        }
    }, [screen]);

    return (
        <ScrollNavigationContext.Provider value={contextValue}>
            {children}
        </ScrollNavigationContext.Provider>
    );
};

export default ScrollNavigationProvider;
