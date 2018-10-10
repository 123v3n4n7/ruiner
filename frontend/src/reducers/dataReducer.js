const initialState = [];
export default function dataReducer(state = initialState, action){
    let catalog = state.slice();
    switch (action.type) {
        case 'FETCH_CATALOG':
            catalog = [];
            return [...catalog, ...action.res];
        default:
            return catalog;
    }
}
