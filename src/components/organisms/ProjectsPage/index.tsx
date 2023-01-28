import {useIsPresent} from 'framer-motion';
import {useMemo} from 'react';
import PageTitle from '~components/molecules/PageTitle';
import ProjectTile from '~components/molecules/ProjectTile';
import useProjects, {ProjectsType} from '~constants/projects';
import {usePreventPageScroll} from '~hooks/usePreventPageScroll';
import {useScrollNavigation} from '~providers/ScrollNavigation';
import {
    LeftColumn,
    ProjectsContainer,
    ProjectsPageContainer,
    RightColumn,
    ScrollWrapper,
} from './styles';

const ProjectsPage = () => {
    const projects = useProjects();
    const sortedProjects = useMemo(() => {
        const leftProjects: ProjectsType[] = [];
        const rightProjects: ProjectsType[] = [];
        projects.map((item, index) => {
            index % 2 === 0 ? leftProjects.push(item) : rightProjects.push(item);
        });
        return {
            leftProjects,
            rightProjects,
        };
    }, [projects]);
    const scrollRef = usePreventPageScroll();

    const isPresent = useIsPresent();

    const {previous} = useScrollNavigation();

    const exitDelay = useMemo(() => {
        if (isPresent && previous === 'contact')
            return {columnsDelay: 2.5, titleDelay: 1.5};
        if (isPresent && previous === 'home')
            return {columnsDelay: 2, titleDelay: 1};
        if (isPresent && previous === 'about')
            return {columnsDelay: 2, titleDelay: 1};
        return {columnsDelay: 0, titleDelay: 0};
    }, [isPresent, previous]);
    return (
        <ProjectsPageContainer>
            <PageTitle text="Projects" color="white" delay={exitDelay.titleDelay}/>
            <ScrollWrapper ref={scrollRef}>
                <ProjectsContainer>
                    <LeftColumn
                        exit={{x: -50, opacity: 0}}
                        initial={{x: -50, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{delay: exitDelay.columnsDelay}}
                    >
                        {sortedProjects.leftProjects.map((item) => {
                            return <ProjectTile {...item} />;
                        })}
                    </LeftColumn>
                    <RightColumn
                        exit={{x: 50, opacity: 0}}
                        initial={{x: 50, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{delay: exitDelay.columnsDelay}}
                    >
                        {sortedProjects.rightProjects.map((item) => {
                            return <ProjectTile {...item} />;
                        })}
                    </RightColumn>
                </ProjectsContainer>
            </ScrollWrapper>
        </ProjectsPageContainer>
    );
};

export default ProjectsPage;
