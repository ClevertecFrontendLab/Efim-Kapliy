type NameLinkInMenu = {
    ru: string;
    en?: string;
};

type CrumbsParams = {
    ru: string;
    en?: string;
};

type ChildrenRouteParams = {
    url: string;
    crumbs?: CrumbsParams;
    nameInMenu?: NameLinkInMenu;
};

type RouteParams = {
    url: string;
    crumbs?: CrumbsParams;
    nameInMenu?: NameLinkInMenu;
    children?: ChildrenRouteParams[];
};

type RouteKeys =
    | 'LAYOUT'
    | 'JUICIEST'
    | 'SALADS'
    | 'SNACKS'
    | 'FIRST_COURSES'
    | 'SECOND_COURSES'
    | 'DESSERT_AND_PASTRIES'
    | 'GRILLED_DISHES'
    | 'VEGAN_CUISINE'
    | 'CHILDREN_DISHES'
    | 'THERAPEUTIC_NUTRITION'
    | 'NATIONAL_DISHES'
    | 'SAUCES'
    | 'HOMEMADE_PREPARATIONS'
    | 'DRINKS'
    | 'NOT_FOUND'
    | 'ANY_ROUTE';

export type { RouteKeys, RouteParams };
