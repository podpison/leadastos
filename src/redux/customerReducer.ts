import { Dispatch } from "redux";
import { customerAPI } from "../api/api";
import { ActionsType } from "./store";
import { alertActions } from "./alertReducer";

export type ServiceYouPayForType = {
    name: string
    price: number
}

export type CustomerDataType = {
    firstName: string
    lastName: string
    email: string
    servicesYouPayFor: ServiceYouPayForType[]
    amount: number
}

export type ContactUsType = {
    fullName: string
    email: string
    howCanWeHelpYou: string
}

const initialState = {
    servicesYouPayFor: [] as ServiceYouPayForType[],
    firstName: '',
    lastName: '',
    email: ''
};

type Actions = ActionsType<typeof customerActions>;

export const customerReducer = (state = initialState, action: Actions) => {
    switch (action.type) {
        case 'CUSTOMER-REDUCER/ADD-NEW-SERVICE-FOR-PAYING':
            return { ...state, servicesYouPayFor: [...state.servicesYouPayFor, action.serviceData] };
        case 'CUSTOMER-REDUCER/DELETE-SERVICE-FOR-PAYING':
            let filtredServices = state.servicesYouPayFor.filter(s => s.name !== action.serviceData.name);
            return { ...state, servicesYouPayFor: filtredServices };
        case 'CUSTOMER-REDUCER/DELETE-ALL-SERVICES-FOR-PAYING':
            return { ...state, servicesYouPayFor: [] };
        case 'CUSTOMER-REDUCER/CHANGE-FIELD-VALUE':
            return { ...state, [action.fieldName]: action.value };
        case 'CUSTOMER-REDUCER/RESET-FIELDS':
            return { ...state, firstName: '', lastName: '', email: '' };
        default:
            return { ...state };
    };
};

export const customerActions = {
    addNewServiceForPaying: (serviceData: ServiceYouPayForType) => ({ type: 'CUSTOMER-REDUCER/ADD-NEW-SERVICE-FOR-PAYING', serviceData } as const),
    deleteServiceForPaying: (serviceData: ServiceYouPayForType) => ({ type: 'CUSTOMER-REDUCER/DELETE-SERVICE-FOR-PAYING', serviceData } as const),
    deleteAllServicesForPaying: () => ({ type: 'CUSTOMER-REDUCER/DELETE-ALL-SERVICES-FOR-PAYING' } as const),
    changeFieldValue: (fieldName: 'firstName' | 'lastName' | 'email', value: string) => ({ type: 'CUSTOMER-REDUCER/CHANGE-FIELD-VALUE', fieldName, value } as const),
    resetFields: () => ({ type: 'CUSTOMER-REDUCER/RESET-FIELDS' } as const)
};

export const subscribeCustomer = (customerData: CustomerDataType | ContactUsType) => async (dispatch: Dispatch) => {
    let response = await customerAPI.subscribeCustomer(customerData);
    dispatch(alertActions.setAlertInformation(response));
}