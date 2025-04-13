import { Button, useColorMode } from '@chakra-ui/react';
import { FC } from 'react';

export const ToggleThemeButton: FC = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Button onClick={toggleColorMode}>Toggle {colorMode === 'light' ? 'Dark' : 'Light'}</Button>
    );
};
