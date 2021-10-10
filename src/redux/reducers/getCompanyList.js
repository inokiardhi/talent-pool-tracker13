import { GET_COMPANY_, DEL_COMPANY_, CLEAR } from "../type";
 
const initialState = {
    listCompany: [],
    loading: false,
    error: null,
  };
  
  const Companies = (state = initialState, action) => {
      const { type, payload, error } = action;
    //   console.log("ini reducer")
      switch (type) {
          case `${GET_COMPANY_}BEGIN`:
              return {
                  ...state,
                  loading: true,
              };
          case `${GET_COMPANY_}SUCCESS`:
              return {
                  ...state,
                  listCompany: payload,
                  loading: false,
                  error: null,
              };
          case `${GET_COMPANY_}FAIL`:
              return {
                  ...state,
                  loading: false,
                  error: error,
              };

           case `${DEL_COMPANY_}BEGIN` :
              return {
                  ...state,
                  loading : true,
            };
          case `${DEL_COMPANY_}SUCCESS` :
              return {
                  ...state,
                  loading : false,
                  error : null,
            };
          case `${DEL_COMPANY_}FAIL` :
              return {
                  ...state,
                  loading : false,
                  error : error,
            };

           case CLEAR:
              return {
                  ...state,
                  listCompany: [],
                  loading: false,
                  error: null,
            };
          default :
              return {
                  ...state,
              };
      }
  }
  
  export default Companies;