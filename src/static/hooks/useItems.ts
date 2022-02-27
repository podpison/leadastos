import { getCustomerLogosItemsSelector, getPortfolioItemsSelector, getPricesItemsSelector } from './../../redux/selectors';
import { getStaticItems } from './../../redux/staticReducer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

//items name must be exact as in the static reducer
export const useItems = (itemsName: 'portfolioItems' | 'customerLogosItems' | 'pricesItems') => {
    const dispatch = useDispatch();
    dispatch(getStaticItems(itemsName));
    const portfolioItems = useSelector(getPortfolioItemsSelector);
    const customerLogosItems = useSelector(getCustomerLogosItemsSelector);
    const pricesItems = useSelector(getPricesItemsSelector);

    switch (itemsName) {
        case 'portfolioItems':
            return portfolioItems
        case 'customerLogosItems':
            return customerLogosItems;
        case 'pricesItems':
            return pricesItems;
    };
};