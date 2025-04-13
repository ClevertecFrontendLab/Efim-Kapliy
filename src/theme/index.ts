import { extendTheme } from '@chakra-ui/react';

import { breakpoints, colors, config, spacing, typography } from './foundations';
import { styles } from './styles';

const customTheme = {
    config,
    typography,
    colors,
    spacing,
    breakpoints,
    styles,
};

export const theme = extendTheme(customTheme);
