import { type RouteObject } from 'react-router';

import { MainPage } from '~/pages/layout-page/main-page';

export const mainPage: RouteObject = {
    index: true,
    element: <MainPage />,
};
