import { RouteParams } from '~/types/routes';

import { CHILDREN_DISHES } from './blocks/children-dishes';
import { DESSERT_AND_PASTRIES } from './blocks/desserts-and-pastries';
import { DRINKS } from './blocks/drinks';
import { FIRST_COURSES } from './blocks/first-courses';
import { GRILLED_DISHES } from './blocks/grilled-dishes';
import { HOMEMADE_PREPARATIONS } from './blocks/homemade-preparations';
import { NATIONAL_DISHES } from './blocks/national-dishes';
import { SALADS } from './blocks/salads';
import { SAUCES } from './blocks/sauces';
import { SECOND_COURSES } from './blocks/second-courses';
import { SNACKS } from './blocks/snacks';
import { THERAPEUTIC_NUTRITION } from './blocks/therapeutic-nutrition';
import { VEGAN_CUISINE } from './blocks/vegan-cuisine';
import { JUICIEST } from './other/juiciest';

export const ROUTES: RouteParams = {
    LAYOUT: {
        url: '/',
        crumbs: {
            ru: 'Главная',
        },
    },
    JUICIEST,
    SALADS,
    SNACKS,
    FIRST_COURSES,
    SECOND_COURSES,
    DESSERT_AND_PASTRIES,
    GRILLED_DISHES,
    VEGAN_CUISINE,
    CHILDREN_DISHES,
    THERAPEUTIC_NUTRITION,
    NATIONAL_DISHES,
    SAUCES,
    HOMEMADE_PREPARATIONS,
    DRINKS,
    NOT_FOUND: {
        url: '/not-found',
    },
    ANY_ROUTE: {
        url: '/*',
    },
};
