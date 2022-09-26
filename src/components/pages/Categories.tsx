import React, { useState } from 'react'
import { useAppSelector } from '../../ReduxToolkit/Hooks';
import { ICategoryProps } from "../../ReduxToolkit/features/userSlice";
import MiniCard from '../MiniCard';

const Categories = () => {
  const categories=useAppSelector(state=>state.app.category);
  const [cat,setCat]=useState(false)
  
return (
  <div className="">
    <p>Filter By Categories</p>
  {categories.length>0&&categories.map((e:ICategoryProps,i)=>(
    <MiniCard key={i} {...e}/>
 ))}
      
  </div>
)
}

export default Categories