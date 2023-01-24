import {LogosAndText, LogosContainer} from './styles';

type LogosSliderProps = {
    children: React.ReactNode;
    text: string;
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
    margin?: string;
};

const LogosSlider = ({
    children,
    text,
    top,
    left,
    right,
    bottom,
    margin
}: LogosSliderProps) => {
    return (
        <LogosAndText bottom={bottom} left={left} right={right} top={top} margin={margin}>
            <div>{text}</div>
            <LogosContainer>{children}</LogosContainer>
        </LogosAndText>
    );
};

export default LogosSlider;
