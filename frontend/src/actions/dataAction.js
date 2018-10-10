export const fetchCatalog = () => {
    return dispatch => {
        let headers = {"Content-Type": "application/json"};
        return fetch('/api/catalog/', {headers, method:"GET"})
            .then(res => res.json())
            .then(res => {
                return dispatch({
                    type: 'FETCH_CATALOG',
                    res
                })
            })
    }
};

export const fetchProducts = (productId) => {
    return dispatch => {
        let headers = {"Content-Type": "application/json"};
        console.log(productId);
        console.log(`/api/products/${productId}/`);
        return fetch(`/api/products/${productId}/`, {headers, method:"GET"})
            .then(res => res.json())
            .then(res => {
                return dispatch({
                    type: 'FETCH_PRODUCTS',
                    res
                })
            })
    }
};

export const fetchContent = () => {
    return dispatch => {
        let headers = {"Content-Type": "application/json"};
        return fetch('/api/content/', {headers, method: "GET"})
            .then(res=>res.json())
            .then(res=>{
                return dispatch({
                    type: 'FETCH_CONTENT',
                    res
                })
            })
    }
};

export const fetchContentImages = () => {
    return dispatch => {
        let headers = {"Content-Type": "application/json"};
        return fetch('/api/images/', {headers, method: "GET"})
            .then(res=>res.json())
            .then(res=>{
                console.log(res);
                return dispatch({
                    type: 'FETCH_CONTENT_IMAGES',
                    res
                })
            })
    }
};