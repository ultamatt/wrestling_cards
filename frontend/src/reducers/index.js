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
        return action.wrestlers.map((it, daIndex) => {
            if(daIndex === 0){
                return {...it, selected:true};
            }
            return {...it, selected:false};
        });
    case 'WRESTLERS_ADD_DATA_SUCCESS':
        return [...state, action.wrestler];
    case 'WRESTLERS_UPDATE_DATA_SUCCESS':
        return state.map((it) => {
            if(it.id === action.wrestler.id){
                console.log("Updating state");
                console.log(action.wrestler);
                return {...action.wrestler, selected:true};
            }
            return {...it, selected:false};
        });
    case 'WRESTLERS_SELECT_DATA_SUCCESS':{
        let selectedIndex = state.map((it, daIndex) => {
            if(it.selected){
                return daIndex;
            }
            return 0;
        }).reduce((accumulator, currentValue) => accumulator + currentValue);

        if(action.direction === 'back'){
            selectedIndex -= 1;
        } else if(action.direction === 'next'){
            selectedIndex += 1;
        }

        if(selectedIndex >= state.length){
            selectedIndex = 0;
        } else if(selectedIndex === -1){
            selectedIndex = state.length - 1;
        }

        return state.map((it, daIndex) => {
            if(daIndex === selectedIndex){
                return {...it, selected:true};
            }
            return {...it, selected:false};
        });
    }
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
