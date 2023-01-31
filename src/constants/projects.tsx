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
        download: string;
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
                    url: 'e-lib_case-study.pdf',
                    download: 'e-lib_case-study.pdf'
                },
            },
            {
                name: 'Foodalization',
                imgSrc: FoodalizationImage,
                link: {
                    text: 'Case study',
                    url: 'foodalization_case-study.pdf',
                    download: 'foodalization_case-study.pdf'
                },
            },
        ];
        return projects;
    }, []);
};

export default useProjects;
