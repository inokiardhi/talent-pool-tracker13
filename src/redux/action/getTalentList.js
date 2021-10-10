import { GET_TALENT_, DEL_TALENT_, CLEAR } from "../type";

export const getTalentList = () => {
  // console.log("ini action")
  return {
    type: `${GET_TALENT_}BEGIN`,
  };
};

export const delTalentList = (id) => {
  return {
    type: `${DEL_TALENT_}BEGIN`,
    id,
  };
};

export const clearList = () => {
  return {
    type: CLEAR,
  };
};







