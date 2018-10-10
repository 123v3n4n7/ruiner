const initialState = [];
export default function dataReducer(state = initialState, action){
    let products = state.slice();
    switch (action.type) {
        case 'FETCH_PRODUCTS':
            products = [];
            return [...products, ...action.res];
        default:
            return products;
    }
}