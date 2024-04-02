import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const App1 = () => {

    let [se,se1]=useState("");
    let [w,wr]=useState([]);

    let oc=(e)=>{
        se1(e.target.value);
    }

    let ol=()=>{
        wr([...w,{id:uuidv4(),se,isCompleted:false}]);
        se1("");
    }

    let oncheck=(e)=>{
        let id=e.target.name;
        console.log(id);

        let index=w.findIndex((item)=>{
            return item.id==id;
        })

        console.log(index);

        let newtodo=[...w];
        console.log(newtodo);

        newtodo[index].isCompleted=!newtodo[index].isCompleted;
        wr(newtodo);
    }

    let del=(e,id)=>{
        console.log(id);

        let dele=w.filter((item)=>{
            return item.id!=id;
        })

        wr(dele);
    }
    let edit=(e,id)=>{
        console.log(id);

        let newtodo=w.filter(item=>item.id==id);
        se1(newtodo[0].se);

        let dele=w.filter((item)=>{
            return item.id!=id;
        })

        wr(dele);
    }
  return (
    <>
        <h1>Todo List</h1>
        <input type="text" value={se} onChange={oc} className='border'/>
         <button onClick={ol}>Add</button>
        {w.map((e)=>{
            return <ul> 
                <li><input type="checkbox" name={e.id}  onChange={oncheck} value={e.isCompleted}/>
                <div className={e.isCompleted?'line-through':""}>{e.se}</div>
                <button className='border border-black' onClick={(el)=>del(el,e.id)}>delete</button>
                <button className='border border-black' onClick={(el)=>edit(el,e.id)}>edit</button>
                </li>
            </ul>
        })}
    </>
  )
}

export default App1
