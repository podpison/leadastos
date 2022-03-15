import { ActionsType } from "./store";

type AlertDataType = {
    title: string
    message: string
}

type SeverityType = 'error' | 'info' | 'success' | 'warning';

const initialState = {
    isOpen: null as boolean | null,
    severity: 'info' as SeverityType,
    data: {} as AlertDataType
};

export type AlertType = typeof initialState;
export type AlertTypeWithoutIsOpen = Omit<AlertType, 'isOpen'>;

type Actions = ActionsType<typeof alertActions>;

export const alertReducer = (state = initialState, action: Actions) => {
    switch (action.type) {
        case 'ALERT-REDUCER/SET-ALERT-INFORMATION':
            return { ...state, isOpen: true, ...action.information };
        case 'ALERT-REDUCER/CLOSE-ALERT':
            return { ...state, isOpen: null };
        default:
            return { ...state };
    };
};

export const alertActions = {
    setAlertInformation: (information: AlertTypeWithoutIsOpen) => ({ type: 'ALERT-REDUCER/SET-ALERT-INFORMATION', information } as const),
    closeAlert: () => ({ type: 'ALERT-REDUCER/CLOSE-ALERT' } as const)
};
