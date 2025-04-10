import { RouteParams } from '~/types/routes';

export const GRILLED_DISHES: RouteParams = {
    url: '/grilled-dishes',
    crumbs: {
        ru: 'Блюда на гриле',
    },
    nameInMenu: {
        ru: 'Блюда на гриле',
    },
    children: [
        {
            url: '',
            crumbs: {
                ru: 'Говядина',
            },
            nameInMenu: {
                ru: 'Говядина',
            },
        },
        {
            url: '',
            crumbs: {
                ru: 'Свинина',
            },
            nameInMenu: {
                ru: 'Свинина',
            },
        },
        {
            url: '',
            crumbs: {
                ru: 'Птица',
            },
            nameInMenu: {
                ru: 'Птица',
            },
        },
        {
            url: '',
            crumbs: {
                ru: 'Рыба',
            },
            nameInMenu: {
                ru: 'Рыба',
            },
        },
        {
            url: '',
            crumbs: {
                ru: 'Грибы',
            },
            nameInMenu: {
                ru: 'Грибы',
            },
        },
        {
            url: '',
            crumbs: {
                ru: 'Овощи',
            },
            nameInMenu: {
                ru: 'Овощи',
            },
        },
    ],
};
