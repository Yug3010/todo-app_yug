import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import List from './components/List'
import { v4 as uuidv4 } from 'uuid';

function App() {
  let [todo, settodo] = useState("");
  let[w,wr]=useState([]);

  let ol=()=>{
    wr([...w,{id:uuidv4(),todo,isCompleted:false}]);
    settodo("");
    console.log(w);
  }

  let oc=(e)=>{
    settodo(e.target.value);
  }

  let oncheck=(e)=>{
    let id=e.target.name;
    console.log(id) ;
    let index=w.findIndex((item)=>{
      return item.id===id;
    })
    console.log(index);

    let newtodos=[...w];
    console.log(newtodos);
    newtodos[index].isCompleted = !newtodos[index].isCompleted;
    wr(newtodos);
  }

  return (
    <>
      <Navbar/>
      <div className='flex flex-col items-center  '>
        <h1 className='text-3xl m-5 text-blue-700'>Todo List</h1>
        <div>
          <div>
            <input className='mr-3 border border-1 border-black' type="text" name="text" id="text" placeholder='enter text' value={todo} onChange={oc}/>
            <button className='py-1 px-3 border border-1 border-black' onClick={ol}>Add</button>
          </div>
          <div>
          {w.map((e,i)=>{
            return <div>
            <ul>
              <li className='m-2 bg-gray-400 text-white p-4'>
                <input type="checkbox" name={e.id}  onChange={oncheck} value={e.isCompleted}/>
                  <div className='flex items-center justify-between'>
                  <div className={e.isCompleted?"line-through":""}>
                      {e.todo}    
                  </div>
      
                  <div>
                      <button className='border border-1 border-black mx-2'>Delete</button>
                      <button className='border border-1 border-black'>Edit</button>
                  </div>
                  </div>
                  
                  </li>
            </ul>
          </div>
          })}
          </div>
            
        </div>
      </div>
    </>
  )
}

export default App
