import { RouteParams } from '~/types/routes';

export const FIRST_COURSES: RouteParams = {
    url: '/first-courses',
    crumbs: {
        ru: 'Первые блюда',
    },
    nameInMenu: {
        ru: 'Первые блюда',
    },
    children: [
        {
            url: '',
            crumbs: {
                ru: 'Мясные супы',
            },
            nameInMenu: {
                ru: 'Мясные супы',
            },
        },
        {
            url: '',
            crumbs: {
                ru: 'Овощные супы',
            },
            nameInMenu: {
                ru: 'Овощные супы',
            },
        },
        {
            url: '',
            crumbs: {
                ru: 'Бульоны',
            },
            nameInMenu: {
                ru: 'Бульоны',
            },
        },
        {
            url: '',
            crumbs: {
                ru: 'Холодные супы',
            },
            nameInMenu: {
                ru: 'Холодные супы',
            },
        },
        {
            url: '',
            crumbs: {
                ru: 'Диетические супы',
            },
            nameInMenu: {
                ru: 'Диетические супы',
            },
        },
    ],
};
