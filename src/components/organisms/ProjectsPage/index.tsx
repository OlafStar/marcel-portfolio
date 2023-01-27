import {useMemo} from 'react';
import PageTitle from '~components/molecules/PageTitle';
import ProjectTile from '~components/molecules/ProjectTile';
import useProjects, {ProjectsType} from '~constants/projects';
import {usePreventPageScroll} from '~hooks/usePreventPageScroll';
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
    return (
        <ProjectsPageContainer>
            <PageTitle text="Projects" color="white" />
            <ScrollWrapper ref={scrollRef}>
                <ProjectsContainer>
                    <LeftColumn
                        exit={{x: -50, opacity: 0}}
                        initial={{x: -50, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{delay: 1}}
                    >
                        {sortedProjects.leftProjects.map((item) => {
                            return <ProjectTile {...item} />;
                        })}
                    </LeftColumn>
                    <RightColumn
                        exit={{x: 50, opacity: 0}}
                        initial={{x: 50, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{delay: 1}}
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
