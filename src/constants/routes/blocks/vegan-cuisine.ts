import { ParentRouteParams } from '~/types/routes';

export enum VEGAN_CUISINE_CHILD_KEY {
    SNACKS = 'SNACKS',
    FIRST_COURSES = 'FIRST_COURSES',
    SECOND_COURSES = 'SECOND_COURSES',
    SIDE_DISHES = 'SIDE_DISHES',
    DESSERTS = 'DESSERTS',
    BAKERY = 'BAKERY',
    RAW_FOOD_DISHES = 'RAW_FOOD_DISHES',
    DRINKS = 'DRINKS',
}

export const VEGAN_CUISINE: ParentRouteParams<VEGAN_CUISINE_CHILD_KEY> = {
    url: '/vegan-cuisine',
    crumbs: {
        ru: 'Веганская кухня',
    },
    nameInMenu: {
        ru: 'Веганская кухня',
    },
    children: {
        [VEGAN_CUISINE_CHILD_KEY.SNACKS]: {
            url: '/snacks',
            crumbs: {
                ru: 'Закуски',
            },
            nameInMenu: {
                ru: 'Закуски',
            },
        },
        [VEGAN_CUISINE_CHILD_KEY.FIRST_COURSES]: {
            url: '/first_courses',
            crumbs: {
                ru: 'Первые блюда',
            },
            nameInMenu: {
                ru: 'Первые блюда',
            },
        },
        [VEGAN_CUISINE_CHILD_KEY.SECOND_COURSES]: {
            url: '/second_courses',
            crumbs: {
                ru: 'Вторые блюда',
            },
            nameInMenu: {
                ru: 'Вторые блюда',
            },
        },
        [VEGAN_CUISINE_CHILD_KEY.SIDE_DISHES]: {
            url: '/side_dishes',
            crumbs: {
                ru: 'Гарниры',
            },
            nameInMenu: {
                ru: 'Гарниры',
            },
        },
        [VEGAN_CUISINE_CHILD_KEY.DESSERTS]: {
            url: '/desserts',
            crumbs: {
                ru: 'Десерты',
            },
            nameInMenu: {
                ru: 'Десерты',
            },
        },
        [VEGAN_CUISINE_CHILD_KEY.BAKERY]: {
            url: '/bakery',
            crumbs: {
                ru: 'Выпечка',
            },
            nameInMenu: {
                ru: 'Выпечка',
            },
        },
        [VEGAN_CUISINE_CHILD_KEY.RAW_FOOD_DISHES]: {
            url: '/raw-food-dishes',
            crumbs: {
                ru: 'Сыроедческие блюда',
            },
            nameInMenu: {
                ru: 'Сыроедческие блюда',
            },
        },
        [VEGAN_CUISINE_CHILD_KEY.DRINKS]: {
            url: '/drinks',
            crumbs: {
                ru: 'Напитки',
            },
            nameInMenu: {
                ru: 'Напитки',
            },
        },
    },
};
