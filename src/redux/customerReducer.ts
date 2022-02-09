import { Dispatch } from "redux";
import { customerAPI, CustomerDataType } from "../api/api";
import { ActionsType } from "./store";

const initialState = {
    operationStatus: null as boolean | null
};

type Actions = ActionsType<typeof customerActions>;

export const customerReducer = (state = initialState, action: Actions) => {
    switch (action.type) {
        case 'CUSTOMER/CHANGE-OPERATION-STATUS':
            return { ...state, operationStatus: action.response };
        default:
            return { ...state };
    };
};

export const customerActions = {
    changeOperationStatus: (response: boolean | null) => ({ type: 'CUSTOMER/CHANGE-OPERATION-STATUS', response } as const)
};

export const subscribeCustomer = (customerData: CustomerDataType) => async (dispatch: Dispatch) => {
    let response = await customerAPI.subscribeCustomer(customerData);
    dispatch(customerActions.changeOperationStatus(response));
}