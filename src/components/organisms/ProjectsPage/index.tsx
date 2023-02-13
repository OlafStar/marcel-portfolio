import {useIsPresent} from 'framer-motion';
import {useMemo, useRef, useState} from 'react';
import PageTitle from '~components/molecules/PageTitle';
import ProjectTile from '~components/molecules/ProjectTile';
import useProjects, {ProjectsType} from '~constants/projects';
import {usePreventPageScroll} from '~hooks/usePreventPageScroll';
import {useScrollNavigation} from '~providers/ScrollNavigation';
import useMouseWheelControl from '~providers/ScrollNavigation/useMouseWheelControl';
import useTouchDragControl from '~providers/ScrollNavigation/useTouchDragControl';
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

    const {previous, next, previousScreen} = useScrollNavigation();

    const exitDelay = useMemo(() => {
        if (isPresent && previous === 'contact')
            return {columnsDelay: 2.5, titleDelay: 1.5};
        if (isPresent && previous === 'home')
            return {columnsDelay: 2, titleDelay: 1};
        if (isPresent && previous === 'about')
            return {columnsDelay: 2, titleDelay: 1};
        return {columnsDelay: 0, titleDelay: 0};
    }, [isPresent, previous]);

    const [isPrevented, setIsPrevented] = useState(false);

    const handleMouseMove = (event: any) => {
        if (scrollRef.current && scrollRef.current.contains(event.target)) {
            setIsPrevented(true);
        } else {
            setIsPrevented(false);
        }
    };

    useMouseWheelControl({next, previousScreen, isPrevented});
    useTouchDragControl({next, previousScreen, isPrevented});

    return (
        <ProjectsPageContainer
            onMouseMove={handleMouseMove}
            onTouchStart={handleMouseMove}
            onTouchEnd={handleMouseMove}
            onTouchMove={handleMouseMove}
        >
            <PageTitle text="Projekty" color="white" delay={exitDelay.titleDelay} />
            <ScrollWrapper
                ref={scrollRef}
                // onMouseOver={() => setIsPrevented(true)}
                // onMouseLeave={() => setIsPrevented(false)}
                // onTouchMove={() => setIsPrevented(true)}
            >
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
