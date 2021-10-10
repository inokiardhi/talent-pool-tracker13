import { POST_TALENT_, UPDATE_TALENT_ } from "../type";

const initialState = {
    listPostTalent : [],
    loading : false,
    error : null,
}

const PostTalents = (state = initialState, action) => {
    const {type, payload, error} = action;
    console.log(type)
    switch (type) {
        case `${POST_TALENT_}BEGIN`:
            return {
                ...state,
                loading : true
            };
        case `${POST_TALENT_}SUCCESS`:
            return {
                ...state,
                listPostTalent : payload,
                loading : false,
                error : null
            };
        case `${POST_TALENT_}FAIL`:
            return {
                ...state,
                loading : false,
                error : error,
            };

        case `${UPDATE_TALENT_}BEGIN`:
            return {
                ...state,
                loading : true
            };
        case `${UPDATE_TALENT_}SUCCESS`:
            return {
                ...state,
                listPostTalent : payload,
                loading : false,
                error : null
            };
        case `${UPDATE_TALENT_}FAIL`:
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

export default PostTalents