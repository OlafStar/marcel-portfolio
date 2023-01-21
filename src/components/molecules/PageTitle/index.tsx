import {Line, PageTitleContainer, StyledText} from './styles';

type PageTitleProps = {
    text: string;
    color: 'white' | 'black';
};

const PageTitle = ({text}: PageTitleProps) => {
    return (
        <PageTitleContainer>
            <StyledText>{text}</StyledText>
            <Line />
        </PageTitleContainer>
    );
};

export default PageTitle;
