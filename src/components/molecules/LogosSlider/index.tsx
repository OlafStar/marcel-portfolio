import {TargetAndTransition, Transition, VariantLabels} from 'framer-motion';
import {LogosAndText, LogosContainer} from './styles';

type LogosSliderProps = {
    children: React.ReactNode;
    text: string;
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
    margin?: string;
    isMobile?: boolean;
    exit?: TargetAndTransition | VariantLabels | undefined;
    initial?: boolean | VariantLabels | undefined | any;
    animate?: TargetAndTransition | VariantLabels | undefined;
    transition?: Transition | undefined;
};

const LogosSlider = ({
    children,
    text,
    top,
    left,
    right,
    bottom,
    margin,
    exit,
    initial,
    animate,
    transition
}: LogosSliderProps) => {
    return (
        <LogosAndText
            bottom={bottom}
            left={left}
            right={right}
            top={top}
            margin={margin}
            exit={exit}
            initial={initial}
            animate={animate}
            transition={transition}
        >
            <div>{text}</div>
            <LogosContainer>{children}</LogosContainer>
        </LogosAndText>
    );
};

export default LogosSlider;
