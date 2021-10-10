import { GET_PIC_,DEL_PIC_, CLEAR } from "../type";

export const getPicList = () => {
  // console.log("ini action")
  return {
    type: `${GET_PIC_}BEGIN`,
  };
};

export const delPicList = (id) => {
  return {
    type: `${DEL_PIC_}BEGIN`,
    id,
  };
};

export const clearList = () => {
  return {
    type: CLEAR,
  };
};





