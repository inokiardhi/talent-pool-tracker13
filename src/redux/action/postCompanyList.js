import { POST_COMPANY_, UPDATE_COMPANY_ } from "../type";

export const postCompany = (data) => {
  return {
    type: `${POST_COMPANY_}BEGIN`,
    data,
  };
};

export const updateCompany = (data, id) => {
  return {
    type: `${UPDATE_COMPANY_}BEGIN`,
    data,
    id,
  };
};