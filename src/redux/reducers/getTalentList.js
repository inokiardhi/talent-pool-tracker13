import { GET_TALENT_, DEL_TALENT_, CLEAR } from "../type";
 
const initialState = {
    listTalent: [],
    loading: false,
    error: null,
  };
  
  const Talents = (state = initialState, action) => {
      const { type, payload, error } = action;
    //   console.log("ini reducer")
      switch (type) {
          case `${GET_TALENT_}BEGIN`:
              return {
                  ...state,
                  loading: true,
              };
          case `${GET_TALENT_}SUCCESS`:
              return {
                  ...state,
                  listTalent: payload,
                  loading: false,
                  error: null,
              };
          case `${GET_TALENT_}FAIL`:
              return {
                  ...state,
                  loading: false,
                  error: error,
              };
          case `${DEL_TALENT_}BEGIN` :
              return {
                  ...state,
                  loading : true,
            };
          case `${DEL_TALENT_}SUCCESS` :
            return {
                  ...state,
                  loading : false,
                  error : null,
            };
          case `${DEL_TALENT_}FAIL` :
            return {
                  ...state,
                  loading : false,
                  error : error,
            };

           case CLEAR:
              return {
                  ...state,
                  listTalent: [],
                  loading: false,
                  error: null,
            };
            
          default :
              return {
                  ...state,
              };
      }
  }
  
  export default Talents;