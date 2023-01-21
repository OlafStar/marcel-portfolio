import {If} from '~components/atoms/If';
import {ProjectsType} from '~constants/projects';
import {ProjectLink, ProjectName, ProjectTileContainer, TextAndLink} from './styles';

const ProjectTile = ({name, imgSrc, link}: ProjectsType) => {
    return (
        <ProjectTileContainer>
            <img src={imgSrc.src} />
            <TextAndLink>
                <ProjectName>{name}</ProjectName>
                <If condition={link}>
                    <ProjectLink href={link?.url}>{link?.text}</ProjectLink>
                </If>
            </TextAndLink>
        </ProjectTileContainer>
    );
};

export default ProjectTile;
