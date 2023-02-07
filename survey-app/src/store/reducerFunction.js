
const formReducer = (state={width: 10}, action) => {
    switch (action.type) {

        case 'increase':
            return {
                width: state.width + action.amount,
            };
        case 'decrease':
            return {
                width: state.width - action.amount,

            };
        default:
            return state;    
    }