import { ParentRouteParams } from '~/types/routes';

export enum FIRST_COURSES_CHILD_KEY {
    MEAT_SOUPS = 'MEAT_SOUPS',
    VEGETABLE_SOUPS = 'VEGETABLE_SOUPS',
    BROTHS = 'BROTHS',
    COLD_SOUPS = 'COLD_SOUPS',
    DIET_SOUPS = 'DIET_SOUPS',
}

export const FIRST_COURSES: ParentRouteParams<FIRST_COURSES_CHILD_KEY> = {
    url: '/first-courses',
    crumbs: {
        ru: 'Первые блюда',
    },
    nameInMenu: {
        ru: 'Первые блюда',
    },
    children: {
        [FIRST_COURSES_CHILD_KEY.MEAT_SOUPS]: {
            url: '/meat-soups',
            crumbs: {
                ru: 'Мясные супы',
            },
            nameInMenu: {
                ru: 'Мясные супы',
            },
        },
        [FIRST_COURSES_CHILD_KEY.VEGETABLE_SOUPS]: {
            url: '/vegetable-soups',
            crumbs: {
                ru: 'Овощные супы',
            },
            nameInMenu: {
                ru: 'Овощные супы',
            },
        },
        [FIRST_COURSES_CHILD_KEY.BROTHS]: {
            url: '/broths',
            crumbs: {
                ru: 'Бульоны',
            },
            nameInMenu: {
                ru: 'Бульоны',
            },
        },
        [FIRST_COURSES_CHILD_KEY.COLD_SOUPS]: {
            url: '/cold-soups',
            crumbs: {
                ru: 'Холодные супы',
            },
            nameInMenu: {
                ru: 'Холодные супы',
            },
        },
        [FIRST_COURSES_CHILD_KEY.DIET_SOUPS]: {
            url: '/diet-soups',
            crumbs: {
                ru: 'Диетические супы',
            },
            nameInMenu: {
                ru: 'Диетические супы',
            },
        },
    },
};
