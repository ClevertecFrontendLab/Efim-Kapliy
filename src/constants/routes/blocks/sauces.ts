import { RouteParams } from '~/types/routes';

export const SAUCES: RouteParams = {
    url: '/sauces',
    crumbs: {
        ru: 'Соусы',
    },
    nameInMenu: {
        ru: 'Соусы',
    },
    children: [
        {
            url: '',
            crumbs: {
                ru: 'Соусы мясные',
            },
            nameInMenu: {
                ru: 'Соусы мясные',
            },
        },
        {
            url: '',
            crumbs: {
                ru: 'Соусы сырные',
            },
            nameInMenu: {
                ru: 'Соусы сырные',
            },
        },
        {
            url: '',
            crumbs: {
                ru: 'Маринады',
            },
            nameInMenu: {
                ru: 'Маринады',
            },
        },
    ],
};
