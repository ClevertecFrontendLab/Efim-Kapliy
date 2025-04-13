import { ParentRouteParams } from '~/types/routes';

export enum GRILLED_DISHES_CHILD_KEY {
    BEEF = 'BEEF',
    PORK = 'PORK',
    BIRD = 'BIRD',
    FISH = 'FISH',
    MUSHROOMS = 'MUSHROOMS',
    VEGETABLES = 'VEGETABLES',
}

export const GRILLED_DISHES: ParentRouteParams<GRILLED_DISHES_CHILD_KEY> = {
    url: '/grilled-dishes',
    crumbs: {
        ru: 'Блюда на гриле',
    },
    nameInMenu: {
        ru: 'Блюда на гриле',
    },
    children: {
        [GRILLED_DISHES_CHILD_KEY.BEEF]: {
            url: '/beef',
            crumbs: {
                ru: 'Говядина',
            },
            nameInMenu: {
                ru: 'Говядина',
            },
        },
        [GRILLED_DISHES_CHILD_KEY.PORK]: {
            url: '/pork',
            crumbs: {
                ru: 'Свинина',
            },
            nameInMenu: {
                ru: 'Свинина',
            },
        },
        [GRILLED_DISHES_CHILD_KEY.BIRD]: {
            url: '/bird',
            crumbs: {
                ru: 'Птица',
            },
            nameInMenu: {
                ru: 'Птица',
            },
        },
        [GRILLED_DISHES_CHILD_KEY.FISH]: {
            url: '/fish',
            crumbs: {
                ru: 'Рыба',
            },
            nameInMenu: {
                ru: 'Рыба',
            },
        },
        [GRILLED_DISHES_CHILD_KEY.MUSHROOMS]: {
            url: '/mushrooms',
            crumbs: {
                ru: 'Грибы',
            },
            nameInMenu: {
                ru: 'Грибы',
            },
        },
        [GRILLED_DISHES_CHILD_KEY.VEGETABLES]: {
            url: '/vegetables',
            crumbs: {
                ru: 'Овощи',
            },
            nameInMenu: {
                ru: 'Овощи',
            },
        },
    },
};
