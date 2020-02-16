import * as actionTypes from "./actionTypes";

export const saveResult = res => {
  return {
    type: actionTypes.STORE_RESULT,
    result: res
  };
};

export const storeResults = res => {
  return (dispatch, getState) => {
    setTimeout(() => {
      const oldcount = getState().ctr.counter;
      console.log(oldcount);

      dispatch(saveResult(res));
    }, 2000);
  };
};

export const deleteResults = id => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElId: id
  };
};
