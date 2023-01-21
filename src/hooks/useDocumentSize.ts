import {useEffect, useState} from 'react';

const useDocumentSize = () => {
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => {
            setHeight(entries[0].target.clientHeight);
            setWidth(entries[0].target.clientWidth);
        });

        resizeObserver.observe(document.body);
    }, []);

    return {height, width};
};

export default useDocumentSize;
