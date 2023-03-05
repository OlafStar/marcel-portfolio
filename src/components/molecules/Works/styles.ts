import styled from 'styled-components';

export const WorksContainer = styled.div`
    display: flex;
    gap: 30px;
    flex-wrap: wrap;

    @media (max-width: 880px) {
        gap: 20px;
    }
`;
