import { Dispatch } from "redux";
import { customerAPI, CustomerDataType } from "../api/api";
import { ActionsType } from "./store";

export type ServiceYouPayForType = {
    name: string
    price: number
}

const initialState = {
    operationStatus: null as boolean | null,
    servicesYouPayFor: [] as ServiceYouPayForType[]
};

type Actions = ActionsType<typeof customerActions>;

export const customerReducer = (state = initialState, action: Actions) => {
    switch (action.type) {
        case 'CUSTOMER-REDUCER/CHANGE-OPERATION-STATUS':
            return { ...state, operationStatus: action.response };
        case 'CUSTOMER-REDUCER/ADD-NEW-SERVICE-FOR-PAYING':
            return { ...state, servicesYouPayFor: [...state.servicesYouPayFor, action.serviceData] };
        case 'CUSTOMER-REDUCER/DELETE-SERVICE-FOR-PAYING':
            let filtredServices = state.servicesYouPayFor.filter(s => s.name !== action.serviceData.name);
            return { ...state, servicesYouPayFor: filtredServices };
        case 'CUSTOMER-REDUCER/DELETE-ALL-SERVICES-FOR-PAYING':
            return { ...state, servicesYouPayFor: [] };
        default:
            return { ...state };
    };
};

export const customerActions = {
    changeOperationStatus: (response: boolean | null) => ({ type: 'CUSTOMER-REDUCER/CHANGE-OPERATION-STATUS', response } as const),
    addNewServiceForPaying: (serviceData: ServiceYouPayForType) => ({ type: 'CUSTOMER-REDUCER/ADD-NEW-SERVICE-FOR-PAYING', serviceData } as const),
    deleteServiceForPaying: (serviceData: ServiceYouPayForType) => ({ type: 'CUSTOMER-REDUCER/DELETE-SERVICE-FOR-PAYING', serviceData } as const),
    deleteAllServicesForPaying: () => ({ type: 'CUSTOMER-REDUCER/DELETE-ALL-SERVICES-FOR-PAYING' } as const)
};

export const subscribeCustomer = (customerData: CustomerDataType) => async (dispatch: Dispatch) => {
    let response = await customerAPI.subscribeCustomer(customerData);
    dispatch(customerActions.changeOperationStatus(response));
}