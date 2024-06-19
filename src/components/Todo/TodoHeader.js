import React from 'react';
import './scss/TodoHeader.scss';

const TodoHeader = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // 월 +1 해야 현재 월로 나옴
  const date = today.getDate();
  const dayNames = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  const day = dayNames[today.getDay()];

  return (
    <header>
      <h1>{`${year}년 ${month}월 ${date}일`}</h1>
      <div className='day'>{day}</div>
      <div className='tasks-left'>할 일 3개 남음</div>
    </header>
  );
};

export default TodoHeader;