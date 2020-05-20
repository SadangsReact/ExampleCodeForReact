import React, { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state, // state의 사본을 만들어서
    [action.name]: action.value, // action.name 값만 action.value로 덮어쓰기.
  };
}

const Info_useReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;

  const onChange = (e) => {
    dispatch(e.target); // 이벤트 객체의 e.target을 액션 객체로 사용.
  };

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info_useReducer;
