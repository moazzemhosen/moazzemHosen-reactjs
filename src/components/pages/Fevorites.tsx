import React from 'react'
import { useAppSelector } from '../../ReduxToolkit/Hooks';
import FevoritesCard from '../FevoritesCard';
import { IproductItemsProps } from './Home';

const Fevorites = () => {
    var fevourites = useAppSelector((state) => state.app.favourites);
  return (
    <div>
        {fevourites.length>=0 &&fevourites.map((e)=>( 
         <FevoritesCard key={e._id} {...e}/>
        ))}
        </div>
  )
}

export default Fevorites