import { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state, // state의 사본을 만들어서
    [action.name]: action.value, // action.name 값만 action.value로 덮어쓰기.
  };
}

export default function useInputs(initialForm) {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const onChange = (e) => {
    dispatch(e.target); // 이벤트 객체의 e.target을 액션 객체로 사용.
  };
  return [state, onChange];
}
