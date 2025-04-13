import { ParentRouteParams } from '~/types/routes';

export enum CHILDREN_DISHES_CHILD_KEY {
    FIRST_COURSES = 'FIRST_COURSES',
    SECOND_COURSES = 'SECOND_COURSES',
    SIDE_DISHES = 'SIDE_DISHES',
    BAKERY = 'BAKERY',
    GLUTEN_FREE = 'GLUTEN_FREE',
    NO_SUGAR = 'NO_SUGAR',
    ALLERGEN_FREE = 'ALLERGEN_FREE',
    COMPLEMENTARY_FEEDING_DISHES = 'COMPLEMENTARY_FEEDING_DISHES',
}

export const CHILDREN_DISHES: ParentRouteParams<CHILDREN_DISHES_CHILD_KEY> = {
    url: '/children-dishes',
    crumbs: {
        ru: 'Детские блюда',
    },
    nameInMenu: {
        ru: 'Детские блюда',
    },
    children: {
        [CHILDREN_DISHES_CHILD_KEY.FIRST_COURSES]: {
            url: '/first-courses',
            crumbs: {
                ru: 'Первые блюда',
            },
            nameInMenu: {
                ru: 'Первые блюда',
            },
        },
        [CHILDREN_DISHES_CHILD_KEY.SECOND_COURSES]: {
            url: '/second-courses',
            crumbs: {
                ru: 'Вторые блюда',
            },
            nameInMenu: {
                ru: 'Вторые блюда',
            },
        },
        [CHILDREN_DISHES_CHILD_KEY.SIDE_DISHES]: {
            url: '/side-dishes',
            crumbs: {
                ru: 'Гарниры',
            },
            nameInMenu: {
                ru: 'Гарниры',
            },
        },
        [CHILDREN_DISHES_CHILD_KEY.BAKERY]: {
            url: '/bakery',
            crumbs: {
                ru: 'Выпечка',
            },
            nameInMenu: {
                ru: 'Выпечка',
            },
        },
        [CHILDREN_DISHES_CHILD_KEY.GLUTEN_FREE]: {
            url: '/gluten-free',
            crumbs: {
                ru: 'Без глютена',
            },
            nameInMenu: {
                ru: 'Без глютена',
            },
        },
        [CHILDREN_DISHES_CHILD_KEY.NO_SUGAR]: {
            url: '/no-sugar',
            crumbs: {
                ru: 'Без сахара',
            },
            nameInMenu: {
                ru: 'Без сахара',
            },
        },
        [CHILDREN_DISHES_CHILD_KEY.ALLERGEN_FREE]: {
            url: '/allergen-free',
            crumbs: {
                ru: 'Без аллергенов',
            },
            nameInMenu: {
                ru: 'Без аллергенов',
            },
        },
        [CHILDREN_DISHES_CHILD_KEY.COMPLEMENTARY_FEEDING_DISHES]: {
            url: '/complementary-feeding-dishes',
            crumbs: {
                ru: 'Блюда для прикорма',
            },
            nameInMenu: {
                ru: 'Блюда для прикорма',
            },
        },
    },
};
