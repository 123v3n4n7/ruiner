const initialState = [];
export default function contentImagesReducer(state=initialState, action){
    let imageList = state.slice();
    switch (action.type){
        case 'FETCH_CONTENT_IMAGES':
            imageList = [];
            return [...imageList, ...action.res];
        default:
            return imageList;
    }
}