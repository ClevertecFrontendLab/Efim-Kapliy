import { RouteParams } from '~/types/routes';

export const VEGAN_CUISINE: RouteParams = {
    url: '/vegan-cuisine',
    crumbs: {
        ru: 'Веганская кухня',
    },
    nameInMenu: {
        ru: 'Веганская кухня',
    },
    children: [
        {
            url: '',
            crumbs: {
                ru: 'Закуски',
            },
            nameInMenu: {
                ru: 'Закуски',
            },
        },
        {
            url: '',
            crumbs: {
                ru: 'Первые блюда',
            },
            nameInMenu: {
                ru: 'Первые блюда',
            },
        },
        {
            url: '',
            crumbs: {
                ru: 'Вторые блюда',
            },
            nameInMenu: {
                ru: 'Вторые блюда',
            },
        },
        {
            url: '',
            crumbs: {
                ru: 'Гарниры',
            },
            nameInMenu: {
                ru: 'Гарниры',
            },
        },
        {
            url: '',
            crumbs: {
                ru: 'Десерты',
            },
            nameInMenu: {
                ru: 'Десерты',
            },
        },
        {
            url: '',
            crumbs: {
                ru: 'Выпечка',
            },
            nameInMenu: {
                ru: 'Выпечка',
            },
        },
        {
            url: '',
            crumbs: {
                ru: 'Сыроедческие блюда',
            },
            nameInMenu: {
                ru: 'Сыроедческие блюда',
            },
        },
        {
            url: '',
            crumbs: {
                ru: 'Напитки',
            },
            nameInMenu: {
                ru: 'Напитки',
            },
        },
    ],
};
