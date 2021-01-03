const FETCH_DATA = "FETCH_DATA";

export function fetchData(payload) {
  return {
    type: FETCH_DATA,
    payload,
  };
}

const initailState = {
  feedbackData: null,
};

export default function fetchDataReducer(state = initailState, action) {
  const { payload, type } = action;

  switch (type) {
    case FETCH_DATA:
      return { ...state, feedbackData: payload };
    default:
      return state;
  }
}
