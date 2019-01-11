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
export function wrestlersFetchDataSuccess(wrestlers) {
    return {
        type: 'WRESTLERS_FETCH_DATA_SUCCESS',
        wrestlers
    };
}

export function wrestlersFetchData(url) {
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
            .then((wrestlers) => dispatch(wrestlersFetchDataSuccess(wrestlers.data)))
            .catch(() => dispatch(wrestlersHaveErrored(true)));
    };
}
