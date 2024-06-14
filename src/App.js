import React, { useState } from 'react';
import CourseInput from './components/CourseGoals/CourseInput';
import CourseList from './components/CourseGoals/CourseList';
import './App.css';

// 기본 더미 데이터
const DUMMY_DATA = [
  {
    id: 'g1',
    text: '리액트 컴포넌트 스타일링 마스터하기'
  },
  {
    id: 'g2',
    text: 'UI/UX 프로그래밍 쌉고수되기'
  },
];

const App = () => {

  const [goals, setGoals] = useState(DUMMY_DATA);

  // CourseInput에게 전달할 함수
  const addGoalHandler = (goalObject) => {
    setGoals([...goals, goalObject]);
  };

  // CouseItem에게 전달할 함수
  const deleteGoalHandler = (id) => {
    // console.log('id: ', id);
    // let index = -1;
    // for (let i = 0; i < goals.length; i++) {
    //   if (goals[i].id === id) {
    //     index = i;
    //     break;
    //   }
    // }
    // console.log('index: ', index);


    // goals.splice(goals.findIndex(g => g.id === id), 1);

    setGoals(goals.filter(g=>g.id !== id));

  };

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAdd={addGoalHandler} />
      </section>
      <section id="goals">
        <CourseList items={goals} onDelete={deleteGoalHandler} />
      </section>
    </div>
  );
};

export default App;










// import React, { useState } from 'react';
// import './App.css';
// import ExpenseList from './components/expenses/ExpenseList';
// import NewExpense from './components/new-expense/NewExpense';

// const App = () => {

//   // 서버에서 지출항목 JSON 배열을 응답받음
//   const expenses = [
//     {
//       title: '치킨먹음',
//       price: 30000,
//       date: new Date(2024, 6 - 1, 3)
//     },
//     {
//       title: '족발먹음',
//       price: 40000,
//       date: new Date(2023, 12 - 1, 17)
//     },
//     {
//       title: '헬스장등록',
//       price: 300000,
//       date: new Date(2024, 6 - 1, 12)
//     },
//     {
//       title: '파파존스피자',
//       price: 40000,
//       date: new Date(2022, 3 - 1, 4)
//     },
//     {
//       title: '파리채',
//       price: 1500,
//       date: new Date(2023, 5 - 1, 6)
//     },
//   ];

//   // 배열을 상태변수로 관리
//   const [expenseList, setExpenseList] = useState(expenses); 


//   // ExpenseForm에게 내려보낼 함수
//   const onAddExpense = (userInput) => setExpenseList([...expenseList, userInput]);
//   // const onAddExpense = (userInput) => {
//   //   console.log('App.js 가 내려보낸 함수 호출!');
//   //   // console.log(userInput);
//   //   expenseList.push(userInput);

//   //   const newExpenseList = [...expenseList];
//   //   setExpenseList(newExpenseList);

//   //   // console.log(expenseList);
//   // };

//   return (
//     <>
//       <NewExpense onSave={onAddExpense} />
//       <ExpenseList expenses={expenseList} />
//     </>
//   );
// };

// export default App;
// 지출액 프로젝트
