import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from '~/app/App.tsx';
import { store } from '~/store/configure-store.ts';

import { theme } from './theme';

createRoot(document.getElementById('root')!).render(
    <ChakraProvider resetCSS theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </StrictMode>
    </ChakraProvider>,
);
