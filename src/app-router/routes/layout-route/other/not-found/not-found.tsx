import { type RouteObject } from 'react-router';

import { ROUTES } from '~/constants/routes/routes';
import { NotFoundPage } from '~/pages/layout-page/other/not-found-page';

export const notFound: RouteObject = {
    path: ROUTES.NOT_FOUND.url,
    element: <NotFoundPage />,
};
