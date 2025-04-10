import { RouteParams } from '~/types/routes';

export const SNACKS: RouteParams = {
    url: '/snacks',
    crumbs: {
        ru: 'Закуски',
    },
    nameInMenu: {
        ru: 'Закуски',
    },
    children: [
        {
            url: '',
            crumbs: {
                ru: 'Мясные закуски',
            },
            nameInMenu: {
                ru: 'Мясные закуски',
            },
        },
        {
            url: '',
            crumbs: {
                ru: 'Рыбные закуски',
            },
            nameInMenu: {
                ru: 'Рыбные закуски',
            },
        },
        {
            url: '',
            crumbs: {
                ru: 'Овощные закуски',
            },
            nameInMenu: {
                ru: 'Овощные закуски',
            },
        },
        {
            url: '',
            crumbs: {
                ru: 'Теплые закуски',
            },
            nameInMenu: {
                ru: 'Теплые закуски',
            },
        },
        {
            url: '',
            crumbs: {
                ru: 'Бутерброды',
            },
            nameInMenu: {
                ru: 'Бутерброды',
            },
        },
        {
            url: '',
            crumbs: {
                ru: 'Фастфуд',
            },
            nameInMenu: {
                ru: 'Фастфуд',
            },
        },
    ],
};
