import { type RouteObject } from 'react-router';

import { ROUTES } from '~/constants/routes/routes';
import { VeganCuisinePage } from '~/pages/layout-page/blocks/vegan-cuisine-page';

export const veganCuisinePage: RouteObject = {
    path: ROUTES.VEGAN_CUISINE.url,
    element: <VeganCuisinePage />,
};
