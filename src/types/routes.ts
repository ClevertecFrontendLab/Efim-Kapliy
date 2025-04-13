import { CHILDREN_DISHES_CHILD_KEY } from '~/constants/routes/blocks/children-dishes';
import { DRINKS_CHILD_KEY } from '~/constants/routes/blocks/drinks';
import { FIRST_COURSES_CHILD_KEY } from '~/constants/routes/blocks/first-courses';
import { GRILLED_DISHES_CHILD_KEY } from '~/constants/routes/blocks/grilled-dishes';
import { HOMEMADE_PREPARATIONS_CHILD_KEY } from '~/constants/routes/blocks/homemade-preparations';
import { VEGAN_CUISINE_CHILD_KEY } from '~/constants/routes/blocks/vegan-cuisine';

type NameLinkInMenu = {
    ru: string;
    en?: string;
};

type CrumbsParams = {
    ru: string;
    en?: string;
};

type ParentRouteParams<T extends string> = {
    url: string;
    crumbs?: CrumbsParams;
    nameInMenu?: NameLinkInMenu;
    children?: Record<T, ChildrenRouteParams>;
};

type ChildrenRouteParams = {
    url: string;
    crumbs?: CrumbsParams;
    nameInMenu?: NameLinkInMenu;
};

enum RouteKeys {
    JUICIEST = 'JUICIEST',
    LAYOUT = 'LAYOUT',
    SALADS = 'SALADS',
    SNACKS = 'SNACKS',
    FIRST_COURSES = 'FIRST_COURSES',
    SECOND_COURSES = 'SECOND_COURSES',
    DESSERT_AND_PASTRIES = 'DESSERT_AND_PASTRIES',
    GRILLED_DISHES = 'GRILLED_DISHES',
    VEGAN_CUISINE = 'VEGAN_CUISINE',
    CHILDREN_DISHES = 'CHILDREN_DISHES',
    THERAPEUTIC_NUTRITION = 'THERAPEUTIC_NUTRITION',
    NATIONAL_DISHES = 'NATIONAL_DISHES',
    SAUCES = 'SAUCES',
    HOMEMADE_PREPARATIONS = 'HOMEMADE_PREPARATIONS',
    DRINKS = 'DRINKS',
    NOT_FOUND = 'NOT_FOUND',
    ANY_ROUTE = 'ANY_ROUTE',
}

type RouteParams = {
    JUICIEST: ParentRouteParams<string>;
    LAYOUT: ParentRouteParams<string>;
    SALADS: ParentRouteParams<string>;
    SNACKS: ParentRouteParams<string>;
    FIRST_COURSES: ParentRouteParams<FIRST_COURSES_CHILD_KEY>;
    SECOND_COURSES: ParentRouteParams<string>;
    DESSERT_AND_PASTRIES: ParentRouteParams<string>;
    GRILLED_DISHES: ParentRouteParams<GRILLED_DISHES_CHILD_KEY>;
    VEGAN_CUISINE: ParentRouteParams<VEGAN_CUISINE_CHILD_KEY>;
    CHILDREN_DISHES: ParentRouteParams<CHILDREN_DISHES_CHILD_KEY>;
    THERAPEUTIC_NUTRITION: ParentRouteParams<string>;
    NATIONAL_DISHES: ParentRouteParams<string>;
    SAUCES: ParentRouteParams<string>;
    HOMEMADE_PREPARATIONS: ParentRouteParams<HOMEMADE_PREPARATIONS_CHILD_KEY>;
    DRINKS: ParentRouteParams<DRINKS_CHILD_KEY>;
    NOT_FOUND: ParentRouteParams<string>;
    ANY_ROUTE: ParentRouteParams<string>;
};

export type { ChildrenRouteParams, ParentRouteParams, RouteKeys, RouteParams };
