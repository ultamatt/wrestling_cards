export function wrestlerHasErrored(bool) {
    return {
        type: 'WRESTLER_HAS_ERRORED',
        hasErrored: bool
    };
}
export function wrestlerIsLoading(bool) {
    return {
        type: 'WRESTLER_IS_LOADING',
        isLoading: bool
    };
}
export function wrestlerFetchDataSuccess(wrestler) {
    return {
        type: 'WRESTLER_FETCH_DATA_SUCCESS',
        wrestler
    };
}
