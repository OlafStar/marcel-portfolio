import {StaticImageData} from 'next/image';
import ElibImage from '~public/icons/e-lib.png';
import FoodalizationImage from '~public/icons/foodalization.png';
import {useMemo} from 'react';

export type ProjectsType = {
    name: string;
    imgSrc: StaticImageData;
    link?: {
        text: string;
        url: string;
    };
};

const useProjects = () => {
    return useMemo(() => {
        const projects: ProjectsType[] = [
            {
                name: 'E-lib',
                imgSrc: ElibImage,
                link: {
                    text: 'Case study',
                    url: '#',
                },
            },
            {
                name: 'Foodalization',
                imgSrc: FoodalizationImage,
            },
        ];
        return projects;
    }, []);
};

export default useProjects;
