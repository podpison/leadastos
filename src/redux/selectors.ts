import { StateType } from './store';
//STATIC REDUCER
export const getPortfolioItemsSelector = (state: StateType) => state.static.portfolioItems;
export const getCustomerLogosItemsSelector = (state: StateType) => state.static.customerLogosItems;
export const getPricesItemsSelector = (state: StateType) => state.static.pricesItems;

//CUSTOMER REDUCER
export const getServicesYouPayForSelector = (state: StateType) => state.customer.servicesYouPayFor;
export const getContactUsFormData = (state: StateType) => {
    let {firstName, lastName, email} = state.customer;
    return {firstName, lastName, email};
};

//ALERT REDUCER
export const getAlertInformationSelector = (state: StateType) => state.alert;