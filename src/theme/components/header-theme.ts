import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

export const headerTheme = (props: StyleFunctionProps) => ({
    color: mode('gray.700', 'red.800')(props),
    bg: 'lime.50',
});
