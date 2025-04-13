import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem } from '@chakra-ui/react';
import { FC, useMemo } from 'react';
import { Link, UIMatch, useMatches } from 'react-router';

import { ROUTES } from '~/constants/routes';
import { ChildrenRouteParams, RouteParams } from '~/types/routes';

type Crumbs = {
    name: string | null;
    url: string;
    children?: ChildrenCrumb[];
};

type ChildrenCrumb = {
    name: string | null;
    url: string;
};

export const Breadcrumbs: FC = () => {
    const matches: UIMatch[] = useMatches();

    const availableRoutes = useMemo<Crumbs[]>(() => {
        const routes: Crumbs[] = [];
        type RouteKeyType = keyof RouteParams;
        type RouteValueType = RouteParams[RouteKeyType];

        for (const routeKey in ROUTES) {
            const routeValue: RouteValueType = ROUTES[routeKey as RouteKeyType];

            if (routeValue.children) {
                const childrenCrumbs: ChildrenCrumb[] = [];

                for (const childKey in routeValue.children) {
                    const childValue: ChildrenRouteParams =
                        routeValue.children[childKey as keyof typeof routeValue.children];

                    childrenCrumbs.push({
                        name: childValue.crumbs?.ru || null,
                        url: childValue.url,
                    });
                }
                routes.push({
                    name: routeValue.crumbs?.ru || null,
                    url: routeValue.url,
                    children: childrenCrumbs,
                });
            } else {
                routes.push({
                    name: routeValue.crumbs?.ru || null,
                    url: routeValue.url,
                });
            }
        }

        return routes;
    }, []);

    const crumbs = useMemo(() => {
        const libRoutes: Crumbs[] = availableRoutes;
        const currentUrl: string[] = matches[1].pathname.split('/');
        const currentCrumbs: Crumbs[] = [];

        if (currentUrl.length === 2 && currentUrl[1] === '') currentUrl.pop();

        function getCrumbsValue(rout: Crumbs, comparisonUrl: string, resultCrumbs: Crumbs[]) {
            if (rout.url.includes('/')) {
                rout.url.slice(1) === comparisonUrl &&
                    resultCrumbs.push({
                        url: rout.url,
                        name: rout.name,
                    });
            } else {
                rout.url === comparisonUrl &&
                    resultCrumbs.push({
                        url: rout.url,
                        name: rout.name,
                    });
            }
        }

        for (let i = 0; i < currentUrl.length; i++) {
            for (const libRout of libRoutes) {
                getCrumbsValue(libRout, currentUrl[i], currentCrumbs);

                if (i > 2 && libRout.children) {
                    for (const childLibRout of libRout.children) {
                        getCrumbsValue(childLibRout, currentUrl[i], currentCrumbs);
                    }
                }
            }
        }

        // TODO сделать привязку к useKey
        // TODO обработать случай на главной странице '/'
        // TODO оптимизировать Breadcrumb

        return currentCrumbs;
    }, [matches, availableRoutes]);

    return (
        <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
            {crumbs.length &&
                crumbs.map((crumb: Crumbs) => (
                    <BreadcrumbItem>
                        <Link to={crumb.url}>{crumb.name}</Link>
                    </BreadcrumbItem>
                ))}
        </Breadcrumb>
    );
};
