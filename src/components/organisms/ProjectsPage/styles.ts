import {motion} from 'framer-motion';
import styled from 'styled-components';
import {ProjectTileContainer} from '~components/molecules/ProjectTile/styles';

export const ProjectsPageContainer = styled(motion.section)`
    width: 100%;
    height: 100%;
    background-color: #2b3135;
    color: white;
    position: relative;
    overflow: hidden;
    padding: 108px var(--h-padding) 0 var(--h-padding);
`;

export const ProjectsContainer = styled.div`
    display: grid;
    gap: 16px;
    grid-template-columns: max-content max-content;
    justify-content: space-between;
    padding-top: 56px;

    @media (max-width: 1035px) {
        grid-template-columns: max-content;
        justify-content: center;
    }

    @media (max-width: 590px) {
        grid-template-columns: 1fr;
        ${ProjectTileContainer} {
            width: 100%;
        }
    }
`;

export const LeftColumn = styled(motion.div)`
    @media (max-width: 590px) {
        max-width: 100%;
    }
`;

export const RightColumn = styled(motion.div)`
    padding-top: 176px;
    @media (max-width: 1035px) {
        padding-top: 68px;
    }
    @media (max-width: 590px) {
        max-width: 100%;
    }
`;

export const ScrollWrapper = styled.div`
    height: calc(100% - 56px);
    overflow-y: scroll;
    z-index: 10;

    ::-webkit-scrollbar {
        display: none;
    }
`;
