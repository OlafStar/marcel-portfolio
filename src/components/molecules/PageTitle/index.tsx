import {Line, PageTitleContainer, StyledSecondaryText, StyledText, TextContainer} from './styles';

type PageTitleProps = {
    text: string;
    color: 'white' | 'black';
    delay?: number;
    secondaryText?: string;
};

const PageTitle = ({text, color, delay, secondaryText}: PageTitleProps) => {
    return (
        <PageTitleContainer
            color={color}
            exit={{opacity: 0}}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5, delay: delay ? delay : 0}}
        >
            <TextContainer>
                <StyledText>{text}</StyledText>
                {secondaryText && <StyledSecondaryText>{secondaryText}</StyledSecondaryText>}
            </TextContainer>
            <Line
                exit={{width: '0%'}}
                initial={{width: '0%'}}
                animate={{width: '100%'}}
                transition={{
                    duration: 0.5,
                    ease: 'easeInOut',
                    delay: delay ? delay + 0.5 : 0.5,
                }}
            />
        </PageTitleContainer>
    );
};

export default PageTitle;
