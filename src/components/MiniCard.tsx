import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ICategoryProps } from '../ReduxToolkit/features/userSlice'

const MiniCard = ({name}:ICategoryProps) => {
    const navigate=useNavigate();
  return (
    <div className="bg-blue-400 rounded font-bold text-white hover:text-black " onClick={()=>{
navigate(`/categories/${name}`)
    }}>{name}</div>
  )
}

export default MiniCard