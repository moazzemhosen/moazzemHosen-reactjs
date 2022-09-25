import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../ReduxToolkit/Hooks"; 
 import { fetchCategory, fetchProduct } from "../../ReduxToolkit/features/userSlice"; 

import Card from "../Card";
import { useNavigate } from "react-router-dom";
export type IproductItemsProps ={
  _id: string;
  name: string;
  avatar: string;
  category: string;
  description: string;
  developerEmail: string;
  price: number;
  
}
const Home = () => {
  const Products=useAppSelector(state=>state.app.products);
    const dispach=useAppDispatch();
    const navigate=useNavigate()
  const handleAdd=()=>{
navigate("/form")
  }

  useEffect(() => {
    dispach(fetchProduct())
    dispach(fetchCategory())
  }, [dispach]);

  return (<div className="grid grid-cols-4 gap-4 " >
<button onClick={()=>handleAdd()}>Add Products</button>
    {Products.map((e)=>{
        return (
          
          <Card key={e._id} {...e}/>
        )
    })}
  </div>);
}

export default Home