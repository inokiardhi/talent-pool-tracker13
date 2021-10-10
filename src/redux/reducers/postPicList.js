import { POST_PIC_, UPDATE_PIC_ } from "../type";

const initialState = {
    listPostPic : [],
    loading : false,
    error : null,
}

const PostPics = (state = initialState, action) => {
    const {type, payload, error} = action;
    switch (type) {
        case `${POST_PIC_}BEGIN`:
            return {
                ...state,
                loading : true
            };
        case `${POST_PIC_}SUCCESS`:
            return {
                ...state,
                listPostPic : payload,
                loading : false,
                error : null
            };
        case `${POST_PIC_}FAIL`:
            return {
                ...state,
                loading : false,
                error : error,
            };

        case `${UPDATE_PIC_}BEGIN`:
            return {
                ...state,
                loading : true
            };
        case `${UPDATE_PIC_}SUCCESS`:
            return {
                ...state,
                listPostPic : payload,
                loading : false,
                error : null
            };
        case `${UPDATE_PIC_}FAIL`:
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

export default PostPics