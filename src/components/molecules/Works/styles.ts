import styled from 'styled-components';

export const WorksContainer = styled.div`
    display: flex;
    gap: 30px;
    @media (max-width: 880px) {
        gap: 20px;
    }
    @media (max-width: 448px) {
      flex-wrap: wrap;
    }
`;
