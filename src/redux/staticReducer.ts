import { Dispatch } from "redux";
import { itemsAPI } from "../api/api";
import { ActionsType } from "./store";

export type PortfolioItemType = {
    name: string
    link: string
    image: string
};
export type CustomerLogosItemType = {
    logo: string
    linkToWebsite: string
};
//the prices page
export type PricesItemType = {
    serviceName: string
    description: string
    price: number
}
export type PricesItemSlideType = {
    name: string
    items: PricesItemType[]
};

const initialState = {
    portfolioItems: [] as PortfolioItemType[] | undefined | [],
    customerLogosItems: [] as CustomerLogosItemType[] | undefined | [],
    pricesItems: [] as PricesItemSlideType[] | undefined | []
};

type Actions = ActionsType<typeof staticActions>;

export const staticReducer = (state = initialState, action: Actions) => {
    switch (action.type) {
        case 'STATIC/SET-ITEMS':
            return { ...state, [action.itemsType]: action.items };
        default:
            return { ...state };
    };
};

export const staticActions = {
    setItems: (itemsType: string, items: Object) => ({type: 'STATIC/SET-ITEMS', itemsType, items} as const)
};

export const getStaticItems = (itemsType: string) => async (dispatch: Dispatch) => {
    const items = await itemsAPI.getItems(itemsType);
    dispatch(staticActions.setItems(itemsType, items));
}