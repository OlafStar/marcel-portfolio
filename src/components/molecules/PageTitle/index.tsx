import {Line, PageTitleContainer, StyledText} from './styles';

type PageTitleProps = {
    text: string;
    color: 'white' | 'black';
};

const PageTitle = ({text, color}: PageTitleProps) => {
    return (
        <PageTitleContainer color={color}>
            <StyledText>{text}</StyledText>
            <Line />
        </PageTitleContainer>
    );
};

export default PageTitle;
