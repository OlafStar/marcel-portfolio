import styled from 'styled-components';

type ContactPageContainerProps = {
    heightOfSite: number;
};

export const ContactPageContainer = styled.div<ContactPageContainerProps>`
    padding: ${({heightOfSite}) =>
        heightOfSite &&
        `${
            heightOfSite * 0.298828125 > 306 ? 306 : heightOfSite * 0.298828125
        }px var(--h-padding) 0 var(--h-padding)`};
    @media (max-width: 1005px) {
        padding: 118px var(--h-padding) 0 var(--h-padding);
    }
`;

export const ContentContainer = styled.div`
    padding-top: 56px;
    display: flex;
    flex-direction: column;
    gap: 35px;
    align-items: center;
`;

export const TilesContainer = styled.div`
    max-width: 860px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 28px;
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 1005px) {
        justify-content: flex-start;
        flex-direction: column;
        gap: 28px;
    }
`;

export const MailContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    svg {
        width: 100%;
        max-width: 860px;
    }
`;
