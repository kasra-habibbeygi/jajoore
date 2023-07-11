/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

const useElementOffset = (elementRef: any) => {
    const [elementOffset, setElementOffset] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            const offsetTop = elementRef.current?.getBoundingClientRect() || 0;
            setElementOffset(offsetTop);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return elementOffset;
};

export default useElementOffset;
