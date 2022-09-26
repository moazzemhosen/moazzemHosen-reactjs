import React from 'react'
import { useNavigate } from 'react-router-dom';

import { removeProduct } from '../ReduxToolkit/features/userSlice';
import { useAppDispatch } from '../ReduxToolkit/Hooks';
import { IproductItemsProps } from './pages/Home'

const FevoritesCard = (props:IproductItemsProps) => {
    const { _id, name, avatar, category } = props;
    const dispatch=useAppDispatch()
    const navigate=useNavigate()
  return (
    <div className=" flex gap-4 mt-8 w-1/2 m-auto border-solid border-2 border-green-600 rounded hover:bg-sky-600 hover:shadow-2xl hover:rounded-2xl">
    {/* <p>{_id}</p> */}
  <div className="w-1/2">
    <img className="w-full h-60 z-30 rounded-2xl" src={avatar} alt="" />
  </div>
    <div className="flex justify-around w-full pt-20">
      <div className="  w-full">
        <p>
          <span className="font-bold">Name:</span> {name}
        </p>
        <p>
          <span className="font-bold">Category:</span>
          {category}
        </p>
        <button
            className="font-bold bg-red-800  text-white w-full hover:bg-red-400 rounded"
            onClick={() => {
              let Yes = prompt("Are You sure to delete?", "Yes");
              //console.log("Yes",Yes);
              if (Yes == "Yes") {
                alert(`Deleting ${name}`);
                dispatch(removeProduct(`${_id}`));
              }
            }}
          >
            Delete from Fevorites
          </button>
      </div>
      </div>
    
  </div>
  )
}

export default FevoritesCard