import {
    SETTINGS_CHANGE
} from '../actions';

const initialState = {
    blur: 0,
    grayscale: 0,
    brightness: 100,
    contrast: 100,
    opacity: 100,
    saturate: 100,
    sepia: 0,
    invert: 0,
    hueRotate:0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SETTINGS_CHANGE:
            return {
                ...state,
                [action.filter]: action.value
            };
        default:
            return state;
    }
};