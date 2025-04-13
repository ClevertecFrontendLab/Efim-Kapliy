import { type RouteObject } from 'react-router';

import { ROUTES } from '~/constants/routes/routes';
import { VeganSnacksPage } from '~/pages/layout-page/blocks/vegan-cuisine-page';

export const veganSnacksPage: RouteObject = {
    path: `${ROUTES.VEGAN_CUISINE.url}${ROUTES.VEGAN_CUISINE.children?.SNACKS.url}`,
    element: <VeganSnacksPage />,
};
