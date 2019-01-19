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
    const randomIndex = Math.floor(Math.random() * state.length);
    switch (action.type) {
    case 'WRESTLERS_FETCH_DATA_SUCCESS':
        return action.wrestlers.map((it, daIndex) => {
            if(daIndex === randomIndex){
                return {...it, selected:true};
            }
            return {...it, selected:false};
        });
    case 'WRESTLERS_ADD_DATA_SUCCESS':
        return [...state, action.wrestler];
    case 'WRESTLERS_SELECT_DATA_SUCCESS':
        return state.map((it, daIndex) => {
            if(daIndex === randomIndex){
                return {...it, selected:true};
            }
            return {...it, selected:false};
        });
    case 'WRESTLERS_DESTROY_DATA_SUCCESS':
        return state.filter((it)=>it.id !== action.id);
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
