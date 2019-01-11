import { combineReducers } from 'redux';

export function wrestlersHaveErrored(state = false, action) {
    switch (action.type) {
    case 'WRESTLERS_HAVE_ERRORED':
        return action.hasErrored;
    default:
        return state;
    }
}

export function wrestlersAreLoading(state = false, action) {
    switch (action.type) {
    case 'WRESTLERS_ARE_LOADING':
        return action.isLoading;
    default:
        return state;
    }
}

export function wrestlers(state = [], action) {
    switch (action.type) {
    case 'WRESTLERS_FETCH_DATA_SUCCESS':
        return action.wrestlers;
    default:
        return state;
    }
}

const rootReducer = combineReducers({
    wrestlers,
    wrestlersHaveErrored,
    wrestlersAreLoading
});

export default rootReducer;
