export function wrestlersHaveErrored(bool) {
    return {
        type: 'WRESTLERS_HAVE_ERRORED',
        hasErrored: bool
    };
}
export function wrestlersAreLoading(bool) {
    return {
        type: 'WRESTLERS_ARE_LOADING',
        isLoading: bool
    };
}
export function wrestlersFetchSuccess(wrestlers) {
    return {
        type: 'WRESTLERS_FETCH_DATA_SUCCESS',
        wrestlers
    };
}
export function wrestlersAddSuccess(wrestler) {
    return {
        type: 'WRESTLERS_ADD_DATA_SUCCESS',
        wrestler
    };
}
export function wrestlersUpdateSuccess(wrestler) {
    return {
        type: 'WRESTLERS_UPDATE_DATA_SUCCESS',
        wrestler
    };
}
export function wrestlersSelectSuccess() {
    return {
        type: 'WRESTLERS_SELECT_DATA_SUCCESS'
    };
}
export function wrestlersDestroySuccess(id) {
    return {
        type: 'WRESTLERS_DESTROY_DATA_SUCCESS',
        id
    };
}

export function uploadImage(url, data) {
    return (dispatch) => {
        dispatch(wrestlersAreLoading(true));
        fetch(url, {
            method:'POST',
            body:data
        })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(wrestlersAreLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((wrestler) => dispatch(wrestlersUpdateSuccess(wrestler.data)))
            .catch(() => dispatch(wrestlersHaveErrored(true)));
    };
}

export function addWrestler(url, data) {
    return (dispatch) => {
        dispatch(wrestlersAreLoading(true));
        fetch(url, {
            method:'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(data)
        })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(wrestlersAreLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((wrestler) => dispatch(wrestlersAddSuccess(wrestler.data)))
            .catch(() => dispatch(wrestlersHaveErrored(true)));
    };
}

export function getWrestlers(url) {
    return (dispatch) => {
        dispatch(wrestlersAreLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(wrestlersAreLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((wrestlers) => dispatch(wrestlersFetchSuccess(wrestlers.data)))
            .catch(() => dispatch(wrestlersHaveErrored(true)));
    };
}

export function selectWrestler(){
    return (dispatch) => {
        dispatch(wrestlersSelectSuccess());
    };
}

export function destroyWrestler(url, id) {
    return (dispatch) => {
        dispatch(wrestlersAreLoading(true));
        fetch(`${url}/${id}`, {
            method: 'DELETE'
        })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(wrestlersAreLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then(() => dispatch(wrestlersDestroySuccess(id)))
            .catch(() => dispatch(wrestlersHaveErrored(true)));
    };
}
