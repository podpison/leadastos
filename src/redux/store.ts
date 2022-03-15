import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { staticReducer } from "./staticReducer";
import { customerReducer } from "./customerReducer";
import { alertReducer } from "./alertReducer";

const reducers = combineReducers({
    static: staticReducer,
    customer: customerReducer,
    alert: alertReducer
});

type Reducers = typeof reducers;
export type StateType = ReturnType<Reducers>;

type Properties<T> = T extends{[key: string]: infer U} ? U : never;
export type ActionsType<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<Properties<T>>;

export const store = createStore(reducers, applyMiddleware(thunkMiddleware))