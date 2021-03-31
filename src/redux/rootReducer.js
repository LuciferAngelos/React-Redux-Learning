import { combineReducers } from "redux";
import { CHANGE_THEME, DECREMENT, DISABLE_BUTTONS, ENABLE_BUTTONS, INCREMENT } from "./types";

function counterReducer(state = 0, action) {
    if (action.type === INCREMENT) {
        return state + 1;
    } else if (action.type === DECREMENT) {
        return state - 1;
    } else {
        return state;
    }

}

const initialThemeState = {
    themeColor: 'light',
    disabled: false
}

function themeReducer(state = initialThemeState, action) {
    switch (action.type) {
        case CHANGE_THEME:
            return {
                ...state,
                themeColor: action.payload
            };
        case ENABLE_BUTTONS:
            return {
                ...state,
                disabled: false
            }
        case DISABLE_BUTTONS:
            return {
                ...state,
                disabled: true
            }
        default:
            return state
    }
}

export const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer
})