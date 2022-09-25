import React from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchDetails } from '../ReduxToolkit/features/userSlice'
import { useAppDispatch } from '../ReduxToolkit/Hooks'
import { IproductItemsProps } from "./pages/Home"
const Card = ({_id,name,avatar}:IproductItemsProps) => {
  const dispatch=useAppDispatch()
  const navigate=useNavigate()
  const handleclick=()=>{
     dispatch(fetchDetails(_id)) 
    navigate(`/products/${_id}`)}
  return (
    <div className="border-solid border-2 border-indigo-600 hover:bg-sky-700">
      <p>{_id}</p>
      <img className="w-full h-80"  src={avatar} alt="" />
      <p>{name}</p>
      <button onClick={()=>handleclick()}>Details</button>
    </div>
  )
}

export default Card