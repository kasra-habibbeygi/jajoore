import React from 'react';
import Image from 'next/image';

//Mui
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';

//Assets
import { CollapsStyle } from './collaps.style';
import Capture from '@/assets/images/icons/Capture.svg';

interface ComponentTypes {
    question: string;
    answer: string;
    divider?: boolean;
}

const Collaps = ({ question, answer, divider = true }: ComponentTypes) => {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <CollapsStyle>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1bh-content' id='panel1bh-header'>
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        <Image src={Capture} alt='' />
                        {question}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>{answer}</Typography>
                </AccordionDetails>
            </Accordion>
            {divider && <Divider />}
        </CollapsStyle>
    );
};

export default Collaps;
