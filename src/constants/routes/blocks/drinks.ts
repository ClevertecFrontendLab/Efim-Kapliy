import { ParentRouteParams } from '~/types/routes';

export enum DRINKS_CHILD_KEY {
    JUICES_AND_FRESH = 'JUICES_AND_FRESH',
    SMOOTHIE = 'SMOOTHIE',
    COMPOTES = 'COMPOTES',
    KISSELS = 'KISSELS',
    COFFEE = 'COFFEE',
    MEDICINAL_TEA = 'MEDICINAL_TEA',
    KVASS = 'KVASS',
    COCKTAILS = 'COCKTAILS',
    ALCOHOL = 'ALCOHOL',
}

export const DRINKS: ParentRouteParams<DRINKS_CHILD_KEY> = {
    url: '/drinks',
    crumbs: {
        ru: 'Напитки',
    },
    nameInMenu: {
        ru: 'Напитки',
    },
    children: {
        [DRINKS_CHILD_KEY.JUICES_AND_FRESH]: {
            url: '/juices-and-fresh',
            crumbs: {
                ru: 'Соки и фреши',
            },
            nameInMenu: {
                ru: 'Соки и фреши',
            },
        },
        [DRINKS_CHILD_KEY.SMOOTHIE]: {
            url: '/smoothie',
            crumbs: {
                ru: 'Смузи',
            },
            nameInMenu: {
                ru: 'Смузи',
            },
        },
        [DRINKS_CHILD_KEY.COMPOTES]: {
            url: '/compotes',
            crumbs: {
                ru: 'Компоты',
            },
            nameInMenu: {
                ru: 'Компоты',
            },
        },
        [DRINKS_CHILD_KEY.KISSELS]: {
            url: '/kissels',
            crumbs: {
                ru: 'Кисели',
            },
            nameInMenu: {
                ru: 'Кисели',
            },
        },
        [DRINKS_CHILD_KEY.COFFEE]: {
            url: '/coffee',
            crumbs: {
                ru: 'Кофе',
            },
            nameInMenu: {
                ru: 'Кофе',
            },
        },
        [DRINKS_CHILD_KEY.MEDICINAL_TEA]: {
            url: '/medicinal-tea',
            crumbs: {
                ru: 'Лечебный чай',
            },
            nameInMenu: {
                ru: 'Лечебный чай',
            },
        },
        [DRINKS_CHILD_KEY.KVASS]: {
            url: '/kvass',
            crumbs: {
                ru: 'Квас',
            },
            nameInMenu: {
                ru: 'Квас',
            },
        },
        [DRINKS_CHILD_KEY.COCKTAILS]: {
            url: '/cocktails',
            crumbs: {
                ru: 'Коктейли',
            },
            nameInMenu: {
                ru: 'Коктейли',
            },
        },
        [DRINKS_CHILD_KEY.ALCOHOL]: {
            url: '/alcohol',
            crumbs: {
                ru: 'Алкогольные',
            },
            nameInMenu: {
                ru: 'Алкогольные',
            },
        },
    },
};
