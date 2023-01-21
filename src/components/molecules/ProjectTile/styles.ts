import styled from 'styled-components';

export const ProjectTileContainer = styled.div`
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 32px;
    img {
        width: 100%;
    }
`;

export const TextAndLink = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

export const ProjectName = styled.div`
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
`;

export const ProjectLink = styled.a`
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    text-decoration-line: underline;
`;
