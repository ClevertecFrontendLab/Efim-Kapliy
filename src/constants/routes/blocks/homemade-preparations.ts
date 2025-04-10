import { RouteParams } from '~/types/routes';

export const HOMEMADE_PREPARATIONS: RouteParams = {
    url: '/homemade-preparations',
    crumbs: {
        ru: 'Домашние заготовки',
    },
    nameInMenu: {
        ru: 'Домашние заготовки',
    },
    children: [
        {
            url: '',
            crumbs: {
                ru: 'Мясные заготовки',
            },
            nameInMenu: {
                ru: 'Мясные заготовки',
            },
        },
        {
            url: '',
            crumbs: {
                ru: 'Рыбные заготовки',
            },
            nameInMenu: {
                ru: 'Рыбные заготовки',
            },
        },
        {
            url: '',
            crumbs: {
                ru: 'Из огурцов',
            },
            nameInMenu: {
                ru: 'Из огурцов',
            },
        },
        {
            url: '',
            crumbs: {
                ru: 'Из томатов',
            },
            nameInMenu: {
                ru: 'Из томатов',
            },
        },
        {
            url: '',
            crumbs: {
                ru: 'Из грибов',
            },
            nameInMenu: {
                ru: 'Из грибов',
            },
        },
        {
            url: '',
            crumbs: {
                ru: 'Овощные заготовки',
            },
            nameInMenu: {
                ru: 'Овощные заготовки',
            },
        },
        {
            url: '',
            crumbs: {
                ru: 'Салаты, икра',
            },
            nameInMenu: {
                ru: 'Салаты, икра',
            },
        },
        {
            url: '',
            crumbs: {
                ru: 'Из фруктов и ягод',
            },
            nameInMenu: {
                ru: 'Из фруктов и ягод',
            },
        },
    ],
};
