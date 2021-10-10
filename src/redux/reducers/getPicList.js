import { GET_PIC_, DEL_PIC_, CLEAR } from "../type";
 
const initialState = {
    listPic: [],
    loading: false,
    error: null,
  };
  
  const Pics = (state = initialState, action) => {
      const { type, payload, error } = action;
    //   console.log("ini reducer")
      switch (type) {
          case `${GET_PIC_}BEGIN`:
              return {
                  ...state,
                  loading: true,
              };
          case `${GET_PIC_}SUCCESS`:
              return {
                  ...state,
                  listPic: payload,
                  loading: false,
                  error: null,
              };
          case `${GET_PIC_}FAIL`:
              return {
                  ...state,
                  loading: false,
                  error: error,
              };

          case `${DEL_PIC_}BEGIN` :
              return {
                  ...state,
                  loading : true,
            };
          case `${DEL_PIC_}SUCCESS` :
            return {
                  ...state,
                  loading : false,
                  error : null,
            };
          case `${DEL_PIC_}FAIL` :
            return {
                  ...state,
                  loading : false,
                  error : error,
            };

           case CLEAR:
              return {
                  ...state,
                  listPic: [],
                  loading: false,
                  error: null,
            };
          default :
              return {
                  ...state,
              };
      }
  }
  
  export default Pics;