import { RouteParams } from '~/types/routes';

export const SALADS: RouteParams = {
    url: '/salads',
    crumbs: {
        ru: 'Салаты',
    },
    children: [
        {
            url: '',
            crumbs: {
                ru: 'Мясные салаты',
            },
            nameInMenu: {
                ru: 'Мясные салаты',
            },
        },
        {
            url: '',
            crumbs: {
                ru: 'Рыбные салаты',
            },
            nameInMenu: {
                ru: 'Рыбные салаты',
            },
        },
        {
            url: '',
            crumbs: {
                ru: 'Овощные салаты',
            },
            nameInMenu: {
                ru: 'Овощные салаты',
            },
        },
        {
            url: '',
            crumbs: {
                ru: 'Теплые салаты',
            },
            nameInMenu: {
                ru: 'Теплые салаты',
            },
        },
    ],
};
