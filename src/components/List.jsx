import React from 'react'

const List = (props) => {
  return (
    <div>
      <ul>
        <li className='m-2 bg-gray-400 text-white p-4'>
            <div className='flex items-center justify-between'>
            <div>
                {props.list}    
            </div>

            <div>
                <button className='border border-1 border-black mx-2'>Delete</button>
                <button className='border border-1 border-black'>Edit</button>
            </div>
            </div>
            
            </li>
      </ul>
    </div>
  )
}

export default List
