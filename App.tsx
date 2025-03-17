import HomePage from "./exam1/HomePage";
import Reg from "./exam1/Reg";
import Log from "./exam1/Log";
import { useState, useEffect } from "react";





 



function App() {
  return(
    <div>
      <HomePage>
        
      </HomePage>
      <Reg>
       
      </Reg>
      <Log/>
    </div>
  )
}

export default App;
























// import './App.css'
// import TaskList from "./hw06/TaskList";
// import TaskInput from "./hw06/TaskInput";
// import TaskFilter from "./hw06/TaskFilter";
// import Task from "./hw06/Task";
// import React, {useState} from 'react';


// function App() {

//   const [tasks, setTasks] = useState([]);
//   const [filter, setFilter] = useState("")

//   const addTask = (taskText) => {
//     if (!taskText.trim()) return;
//     const newTask = { id: Date.now(), text: taskText, completed: false };
//     setTasks([...tasks, newTask]);
//   };

//    const toggleTask = (id) => {
//     setTasks(
//       tasks.map((task) =>
//         task.id === id ? { ...task, completed: !task.completed } : task
//       )
//     );
//   };

//   const deleteTask = (id) => {
//     setTasks(tasks.filter((task) => task.id !== id));
//   };

//   const handleFilterChange = (query) => {
//     setFilter(query);
//   };

  



//   return (
//     <div className='container'>
//       <h1>📝 My Tasks</h1>
//     <TaskList tasks={tasks} filter={filter} toggleTask={toggleTask} deleteTask={deleteTask}/>
//     <TaskInput addTask={addTask}/>
//     <TaskFilter filter={filter} setFilter={handleFilterChange}/>
//     </div>
//   )

// }

// export default App;




// import Products from "./Products";


// function App() {
//   return (
//     <div>
//       <Products name='chocolate'
//       price="18000"
//       image="https://w4s8p5t8.delivery.rocketcdn.me/wp-content/uploads/2019/01/vegan-milk-chocolate-recipe.jpg.webp"/>
//       <Products name='chocolate'
//       price="18000"
//       image="https://w4s8p5t8.delivery.rocketcdn.me/wp-content/uploads/2019/01/vegan-milk-chocolate-recipe.jpg.webp"/>
//       <Products name='chocolate'
//       price="18000"
//       image="https://w4s8p5t8.delivery.rocketcdn.me/wp-content/uploads/2019/01/vegan-milk-chocolate-recipe.jpg.webp"/>
//       <Products name='chocolate'
//       price="18000"
//       image="https://w4s8p5t8.delivery.rocketcdn.me/wp-content/uploads/2019/01/vegan-milk-chocolate-recipe.jpg.webp"/>
//       <UserCard name='meri'
//       Age= '19'
//       city='almaty'/>
//     </div>
//   )
// }


// task bitti



// sayi basladi

// import { useState } from "react";

// function App() {
//    const [count, setCount] = useState(0)

//    function add() {
//     setCount(count + 1);
    
//    }
//    function minus() {
//     setCount(count - 1);
//    }


//    function reset() {
//     setCount(0)
//    }


//    return (
//   <>
//       <h1>{count}</h1>
//       <button className="btn" onClick={add}>Add</button>
//       <button className="btn" onClick={minus}>Minus</button>
//       <button className="btn" onClick={reset}>Reset</button>
//   </>
//   )
// }





// export default App;


// sayi bitti



// tekrar yapmak (sayi)

// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0)

//   function add() {
//     setCount(count + 1)
//   }

//   function minus() {
//     setCount(count - 1)
//   }

//   function reset() {
//     setCount(0)
//   }

//   return (
//     <>
//       <h1>{count}</h1>
//       <button className="btn" onClick={add}>Add</button>
//       <button className="btn" onClick={minus}>minus</button>
//       <button className="btn" onClick={reset}>reset</button>
//     </>
//   )
// }

// export default App;

// tekrar yapmak bitti


// praktika basladi 


// to do list task basladi

// import { useState } from 'react';

// export default function TodoList() {
//     const [tasks, setTasks] = useState([]);
//     const [task, setTask] = useState('');


//     const addTask = () => {
//         if (task.trim () !== "") {
//             setTasks([...tasks, task]);
//             setTask('');
//         }
//     };

//     return (
//         <div>
//             <h1> Tasks </h1>
//             <div>
//                 <input className='inp'
//                 type="text"
//                 value={task}
//                 onChange={(e) => setTask(e.target.value)}
//                 /><br></br>
//                 <button className='btn' onClick={addTask}>
//                     add
//                 </button>
//             </div>
//             <ul>
//                 {tasks.map((item, index) => (
//                     <li key={index}>{item}</li>
//                 ))} 
//             </ul>
//         </div>
//     );
// }

// 5 tasktan 1 task basladi

// import React, {useState} from "react";

// function Count() {

//   const [count, setCount] = useState(0)
  
  

//   function add() {
//     setCount(count * 1)

    
//   }


//   return (
//         <>
//           <h1>{count}</h1>
//           <button className="btn" onClick={add}>Add</button>
//         </>
//   )
// }

// export default Count;


