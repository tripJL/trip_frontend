export const reducerUtils = {
    initial: (inintialData) => ({
        loading: false,
        data: inintialData,
        error: null,
    }),
    loading: (prevState) => ({
        loading: false,
        data: prevState,
        error: null,
    }),
    success: (data) => ({
        loading: true,
        data,
        error: null,
    }),
    error: (error) => ({
        loading: true,
        data: null,
        error,
    }),
};

//reducer module
export const handleAsyncReducer = (type, key, keepData = false) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
    return (state, action) => {
        switch (action.type) {
            case type:
                return {
                    ...state,
                    [key]: reducerUtils.loading(
                        keepData ? state[key].data : null
                    ),
                };
            case SUCCESS:
                return {
                    ...state,
                    [key]: reducerUtils.success(action.data),
                };
            case ERROR:
                return {
                    ...state,
                    [key]: reducerUtils.error(action.data),
                };
            default:
                return state;
        }
    };
};
