'use client'

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from '@/context/action-section-context'
import { useActiveSectionContext } from '@/context/action-section-context';

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
    const { ref, inView } = useInView({
        threshold,
    });

    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
    useEffect(() => {

        if (inView && Date.now() - timeOfLastClick > 1000) {
            console.log(inView, sectionName, Date.now() - timeOfLastClick)
            setActiveSection(sectionName);
        }
    }, [inView, setActiveSection, timeOfLastClick, sectionName]);

    return {
        ref,
    };
}