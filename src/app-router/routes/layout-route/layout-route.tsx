import { RouteObject } from 'react-router';

import { ROUTES } from '~/constants/routes/routes';
import { LayoutPage } from '~/pages/layout-page';

import { veganCuisinePage, veganSnacksPage } from './blocks/vegan-cuisine-page';
import { mainPage } from './main-page';
import { anyRoute } from './other/any-route';
import { juiciestPage } from './other/juiciest-page';
import { notFound } from './other/not-found';

export const layoutRoute: RouteObject = {
    path: ROUTES.LAYOUT.url,
    element: <LayoutPage />,
    children: [mainPage, juiciestPage, veganCuisinePage, veganSnacksPage, notFound, anyRoute],
};
