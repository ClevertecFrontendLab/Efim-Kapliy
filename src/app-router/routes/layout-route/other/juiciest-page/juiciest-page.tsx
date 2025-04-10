import { RouteObject } from 'react-router';

import { ROUTES } from '~/constants/routes/routes';
import { JuiciestPage } from '~/pages/layout-page/other/juiciest-page';

export const juiciestPage: RouteObject = {
    path: ROUTES.JUICIEST.url,
    element: <JuiciestPage />,
};
