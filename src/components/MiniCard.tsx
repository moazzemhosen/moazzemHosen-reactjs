import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ICategoryProps } from '../ReduxToolkit/features/userSlice'

const MiniCard = ({name}:ICategoryProps) => {
    const navigate=useNavigate();
  return (
    <div onClick={()=>{
navigate(`/categories/${name}`)
    }}>{name}</div>
  )
}

export default MiniCard