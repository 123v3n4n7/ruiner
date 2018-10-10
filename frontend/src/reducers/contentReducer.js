const initialState = [];
export default function contentReducer(state=initialState, action){
    switch (action.type){
        case 'FETCH_CONTENT':
            state = action.res;
            return state;
        default:
            return state;
    }
}