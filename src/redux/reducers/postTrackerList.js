import { POST_TRACKER_, UPDATE_TRACKER_ } from "../type";

const initialState = {
    listPostTracker : [],
    loading : false,
    error : null,
}

const PostTrackers = (state = initialState, action) => {
    const {type, payload, error} = action;
    console.log(type)
    switch (type) {
        case `${POST_TRACKER_}BEGIN`:
            return {
                ...state,
                loading : true
            };
        case `${POST_TRACKER_}SUCCESS`:
            return {
                ...state,
                listPostTracker : payload,
                loading : false,
                error : null
            };
        case `${POST_TRACKER_}FAIL`:
            return {
                ...state,
                loading : false,
                error : error,
            };

        case `${UPDATE_TRACKER_}BEGIN`:
            return {
                ...state,
                loading : true
            };
        case `${UPDATE_TRACKER_}SUCCESS`:
            return {
                ...state,
                listPostTracker : payload,
                loading : false,
                error : null
            };
        case `${UPDATE_TRACKER_}FAIL`:
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

export default PostTrackers