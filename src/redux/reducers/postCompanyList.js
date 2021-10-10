import { POST_COMPANY_, UPDATE_COMPANY_ } from "../type";

const initialState = {
    listPostCompanies : [],
    loading : false,
    error : null,
}

const PostCompanies = (state = initialState, action) => {
    const {type, payload, error} = action;
    switch (type) {
        case `${POST_COMPANY_}BEGIN`:
            return {
                ...state,
                loading : true
            };
        case `${POST_COMPANY_}SUCCESS`:
            return {
                ...state,
                listPostCompanies : payload,
                loading : false,
                error : null
            };
        case `${POST_COMPANY_}FAIL`:
            return {
                ...state,
                loading : false,
                error : error,
            };

        case `${UPDATE_COMPANY_}BEGIN`:
            return {
                ...state,
                loading : true
            };
        case `${UPDATE_COMPANY_}SUCCESS`:
            return {
                ...state,
                listPostCompanies : payload,
                loading : false,
                error : null
            };
        case `${UPDATE_COMPANY_}FAIL`:
            return {
                ...state,
                loading : false,
                error : error,
            };

        default :
            return {
                ...state,
            };
    }

}

export default PostCompanies