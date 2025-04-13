import { ParentRouteParams } from '~/types/routes';

export enum HOMEMADE_PREPARATIONS_CHILD_KEY {
    MEAT_PREPARATIONS = 'MEAT_PREPARATIONS',
    FISH_PREPARATIONS = 'FISH_PREPARATIONS',
    FROM_CUCUMBERS = 'FROM_CUCUMBERS',
    FROM_TOMATOES = 'FROM_TOMATOES',
    FROM_MUSHROOMS = 'FROM_MUSHROOMS',
    VEGETABLE_PREPARATIONS = 'VEGETABLE_PREPARATIONS',
    SALADS_AND_CAVIAR = 'SALADS_AND_CAVIAR',
    FROM_FRUITS_AND_BERRIES = 'FROM_FRUITS_AND_BERRIES',
}

export const HOMEMADE_PREPARATIONS: ParentRouteParams<HOMEMADE_PREPARATIONS_CHILD_KEY> = {
    url: '/homemade-preparations',
    crumbs: {
        ru: 'Домашние заготовки',
    },
    nameInMenu: {
        ru: 'Домашние заготовки',
    },
    children: {
        [HOMEMADE_PREPARATIONS_CHILD_KEY.MEAT_PREPARATIONS]: {
            url: '/meat-preparations',
            crumbs: {
                ru: 'Мясные заготовки',
            },
            nameInMenu: {
                ru: 'Мясные заготовки',
            },
        },
        [HOMEMADE_PREPARATIONS_CHILD_KEY.FISH_PREPARATIONS]: {
            url: '/fish-preparations',
            crumbs: {
                ru: 'Рыбные заготовки',
            },
            nameInMenu: {
                ru: 'Рыбные заготовки',
            },
        },
        [HOMEMADE_PREPARATIONS_CHILD_KEY.FROM_CUCUMBERS]: {
            url: '/from-cucumbers',
            crumbs: {
                ru: 'Из огурцов',
            },
            nameInMenu: {
                ru: 'Из огурцов',
            },
        },
        [HOMEMADE_PREPARATIONS_CHILD_KEY.FROM_TOMATOES]: {
            url: '/from-tomatoes',
            crumbs: {
                ru: 'Из томатов',
            },
            nameInMenu: {
                ru: 'Из томатов',
            },
        },
        [HOMEMADE_PREPARATIONS_CHILD_KEY.FROM_MUSHROOMS]: {
            url: '/from-mushrooms',
            crumbs: {
                ru: 'Из грибов',
            },
            nameInMenu: {
                ru: 'Из грибов',
            },
        },
        [HOMEMADE_PREPARATIONS_CHILD_KEY.VEGETABLE_PREPARATIONS]: {
            url: '/vegetable-preparations',
            crumbs: {
                ru: 'Овощные заготовки',
            },
            nameInMenu: {
                ru: 'Овощные заготовки',
            },
        },
        [HOMEMADE_PREPARATIONS_CHILD_KEY.SALADS_AND_CAVIAR]: {
            url: '/salads-and-caviar',
            crumbs: {
                ru: 'Салаты, икра',
            },
            nameInMenu: {
                ru: 'Салаты, икра',
            },
        },
        [HOMEMADE_PREPARATIONS_CHILD_KEY.FROM_FRUITS_AND_BERRIES]: {
            url: '/from-fruits-and-berries',
            crumbs: {
                ru: 'Из фруктов и ягод',
            },
            nameInMenu: {
                ru: 'Из фруктов и ягод',
            },
        },
    },
};
