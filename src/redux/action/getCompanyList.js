import { GET_COMPANY_, DEL_COMPANY_, CLEAR } from "../type";

export const getCompanyList = () => {
  // console.log("ini action")
  return {
    type: `${GET_COMPANY_}BEGIN`,
  };
};

export const delCompanyList = (id) => {
  return {
    type: `${DEL_COMPANY_}BEGIN`,
    id,
  };
};

export const clearList = () => {
  return {
    type: CLEAR,
  };
};





