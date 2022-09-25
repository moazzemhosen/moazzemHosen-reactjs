import React from 'react'
import { useAppSelector } from '../../ReduxToolkit/Hooks';
import { ICategoryProps } from "../../ReduxToolkit/features/userSlice";
import MiniCard from '../MiniCard';

const Categories = () => {
  const categories=useAppSelector(state=>state.app.category);
  
return (
  <div>
  {categories.length>0&&categories.map((e:ICategoryProps,i)=>(
    <MiniCard key={i} {...e}/>
 ))}
      
  </div>
)
}

export default Categories