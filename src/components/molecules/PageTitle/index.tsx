import {Line, PageTitleContainer, StyledText} from './styles';

type PageTitleProps = {
    text: string;
    color: 'white' | 'black';
};

const PageTitle = ({text, color}: PageTitleProps) => {
    return (
        <PageTitleContainer
            color={color}
            exit={{opacity: 0}}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
        >
            <StyledText>{text}</StyledText>
            <Line
                exit={{width: '0%'}}
                initial={{width: '0%'}}
                animate={{width: '100%'}}
                transition={{duration: 0.5, ease: 'easeInOut', delay: 0.5}}
            />
        </PageTitleContainer>
    );
};

export default PageTitle;
