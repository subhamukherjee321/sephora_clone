export const initState = {
    loading: false,
    error: false,
    data: {}
};

export const actionTypes = {
    LOADING: "LOADING",
    SUCCESS: "SUCCESS",
    ERROR: "ERROR"
};

const reducer = (state, action) => {
    switch(action.type) {
        case actionTypes.LOADING:
            return {
                ...state,
                loading: true,
                error: false
            }
        
        case actionTypes.SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                data : action.payload
            };

        case actionTypes.ERROR:
            return {
                ...state,
                loading: false,
                error: true
            };

        default:
            return state;
    };
}

export default reducer;