import { Navigate } from 'react-router';

import { ROUTES } from '~/constants/routes/routes';

export const anyRoute = {
    path: ROUTES.ANY_ROUTE.url,
    element: <Navigate to={ROUTES.NOT_FOUND.url} replace={true} />,
};
