import { ParentRouteParams } from '~/types/routes';

export enum DESSERT_AND_PASTRIES_CHILD_KEY {
    PANCAKES_AND_FRITTERS = 'PANCAKES_AND_FRITTERS',
    PIES_AND_DONUTS = 'PIES_AND_DONUTS',
    CAKES = 'CAKES',
    ROLLS = 'ROLLS',
    CUPCAKES_AND_MUFFINS = 'CUPCAKES_AND_MUFFINS',
    CHEESECAKES_AND_VATRUSHKI = 'CHEESECAKES_AND_VATRUSHKI',
    PUFF_PASTRY = 'PUFF_PASTRY',
    CHOUX_PASTRY = 'CHOUX_PASTRY',
    YEAST_DOUGH = 'YEAST_DOUGH',
    BUNS_AND_PASTRIES = 'BUNS_AND_PASTRIES',
    BREAD = 'BREAD',
    PIZZA_DOUGH = 'PIZZA_DOUGH',
    CREAMS = 'CREAMS',
}

export const DESSERT_AND_PASTRIES: ParentRouteParams<DESSERT_AND_PASTRIES_CHILD_KEY> = {
    url: `/dessert-and-pastries`,
    crumbs: {
        ru: 'Десерты и выпечка',
    },
    nameInMenu: {
        ru: 'Десерты и выпечка',
    },
    children: {
        [DESSERT_AND_PASTRIES_CHILD_KEY.PANCAKES_AND_FRITTERS]: {
            url: '/pancakes-and-fritters',
            crumbs: {
                ru: 'Блины и оладьи',
            },
            nameInMenu: {
                ru: 'Блины и оладьи',
            },
        },
        [DESSERT_AND_PASTRIES_CHILD_KEY.PIES_AND_DONUTS]: {
            url: '/pies-and-donuts',
            crumbs: {
                ru: 'Пироги и пончики',
            },
            nameInMenu: {
                ru: 'Пироги и пончики',
            },
        },
        [DESSERT_AND_PASTRIES_CHILD_KEY.CAKES]: {
            url: '/cakes',
            crumbs: {
                ru: 'Торты',
            },
            nameInMenu: {
                ru: 'Торты',
            },
        },
        [DESSERT_AND_PASTRIES_CHILD_KEY.ROLLS]: {
            url: '/rolls',
            crumbs: {
                ru: 'Рулеты',
            },
            nameInMenu: {
                ru: 'Рулеты',
            },
        },
        [DESSERT_AND_PASTRIES_CHILD_KEY.CUPCAKES_AND_MUFFINS]: {
            url: '/cupcakes-and-muffins',
            crumbs: {
                ru: 'Кексы и маффины',
            },
            nameInMenu: {
                ru: 'Кексы и маффины',
            },
        },
        [DESSERT_AND_PASTRIES_CHILD_KEY.CHEESECAKES_AND_VATRUSHKI]: {
            url: '/cheesecakes-and-vatrushki',
            crumbs: {
                ru: 'Сырники и ватрушки',
            },
            nameInMenu: {
                ru: 'Сырники и ватрушки',
            },
        },
        [DESSERT_AND_PASTRIES_CHILD_KEY.PUFF_PASTRY]: {
            url: '/puff-pastry',
            crumbs: {
                ru: 'Из слоеного теста',
            },
            nameInMenu: {
                ru: 'Из слоеного теста',
            },
        },
        [DESSERT_AND_PASTRIES_CHILD_KEY.CHOUX_PASTRY]: {
            url: '/choux-pastry',
            crumbs: {
                ru: 'Из заварного теста',
            },
            nameInMenu: {
                ru: 'Из заварного теста',
            },
        },
        [DESSERT_AND_PASTRIES_CHILD_KEY.YEAST_DOUGH]: {
            url: '/yeast-dough',
            crumbs: {
                ru: 'Из дрожжевого теста',
            },
            nameInMenu: {
                ru: 'Из дрожжевого теста',
            },
        },
        [DESSERT_AND_PASTRIES_CHILD_KEY.BUNS_AND_PASTRIES]: {
            url: '/buns-and-pastries',
            crumbs: {
                ru: 'Булочки и сдоба',
            },
            nameInMenu: {
                ru: 'Булочки и сдоба',
            },
        },
        [DESSERT_AND_PASTRIES_CHILD_KEY.BREAD]: {
            url: '/bread',
            crumbs: {
                ru: 'Хлеб',
            },
            nameInMenu: {
                ru: 'Хлеб',
            },
        },
        [DESSERT_AND_PASTRIES_CHILD_KEY.PIZZA_DOUGH]: {
            url: '/pizza-dough',
            crumbs: {
                ru: 'Тесто на пиццу',
            },
            nameInMenu: {
                ru: 'Тесто на пиццу',
            },
        },
        [DESSERT_AND_PASTRIES_CHILD_KEY.CREAMS]: {
            url: '/creams',
            crumbs: {
                ru: 'Кремы',
            },
            nameInMenu: {
                ru: 'Кремы',
            },
        },
    },
};
