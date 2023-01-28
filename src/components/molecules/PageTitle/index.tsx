import {Line, PageTitleContainer, StyledText} from './styles';

type PageTitleProps = {
    text: string;
    color: 'white' | 'black';
    delay?: number;
};

const PageTitle = ({text, color, delay}: PageTitleProps) => {
    return (
        <PageTitleContainer
            color={color}
            exit={{opacity: 0}}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5, delay: delay ? delay : 0}}
        >
            <StyledText>{text}</StyledText>
            <Line
                exit={{width: '0%'}}
                initial={{width: '0%'}}
                animate={{width: '100%'}}
                transition={{duration: 0.5, ease: 'easeInOut', delay: delay ? delay + 0.5 : 0.5}}
            />
        </PageTitleContainer>
    );
};

export default PageTitle;
