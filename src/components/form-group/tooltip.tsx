import React, { Fragment } from 'react';

// Assets
import { TooltipStyles } from './tooltip.style';

// MUI
import { Tooltip as MUITooltip } from '@mui/material';

// Types
interface TooltipTypes {
    children: React.ReactNode;
    title: string;
}

const Tooltip = ({ children, title }: TooltipTypes) => {
    return (
        <MUITooltip placement='top' title={<Fragment>{title}</Fragment>}>
            <TooltipStyles>{children}</TooltipStyles>
        </MUITooltip>
    );
};

export default Tooltip;
