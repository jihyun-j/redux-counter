// 초기상태값 필요(state)
// const
const initialState = {
  number: 0,
};

// action value
const PLUS_ONE = "counter/PLUS_ONE";
const MINUS_ONE = "counter/MINUS_ONE";
const PLUS_N = "counter/PLUS_N";
const MINUS_N = "counter/MINUS_N";

// action creator: action value를 return하는 함수
export const plusOne = () => {
  return {
    type: PLUS_ONE,
  };
};

export const minusOne = () => {
  return {
    type: MINUS_ONE,
  };
};

export const plusN = (payload) => {
  return {
    type: PLUS_N,
    payload,
  };
};

export const minusN = (payload) => {
  return {
    type: MINUS_N,
    payload,
  };
};

// 리듀서 : 'state'의 변화를 일으키는 함수
// (1) state를 action의 type에 따라 변경하는 함수
// input: state와 action을 받음
// state를 어떻게할 것인지를 action에서 정함
// payload: 전달되는 실체
// action객체라는 것은 action type을 payload만큼 처리하는 것이다

const counter = (state = initialState, action) => {
  switch (action.type) {
    // action type은 PLUS_ONE
    case PLUS_ONE:
      return { number: state.number + 1 };
    case MINUS_ONE:
      return { number: state.number - 1 };
    case PLUS_N:
      return {
        number: state.number + action.payload,
      };
    case MINUS_N:
      return {
        number: state.number - action.payload,
      };
    default:
      return state;
  }
};

// 리듀서는 export
export default counter;
