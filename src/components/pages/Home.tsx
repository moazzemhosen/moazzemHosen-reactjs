import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../ReduxToolkit/Hooks";
import {
  getCategory,
  getProduct,
} from "../../ReduxToolkit/features/userSlice";

import Card from "../Card";
import { useNavigate, useParams } from "react-router-dom";
import Categories from "./Categories";
export type IproductItemsProps = {
  _id: string;
  name: string;
  avatar: string;
  category: string;
  description: string;
  developerEmail: string;
  price: number;
};
const Home = () => {
  var Products = useAppSelector((state) => state.app.products);
  var favourites = useAppSelector((state) => state.app.favourites);
  const dispach = useAppDispatch();
  const navigate = useNavigate();
  const [open,setOpen]=useState(false)
  const handleAdd = () => {
    navigate("/form");
  };
  const { type } = useParams();
  if (type) {
    //console.log("type",type);
    Products = Products.filter((e) => {
      return e["category"] === type;
    });
    console.log("Products", Products);
  }

  useEffect(() => {
    dispach(getProduct());
    dispach(getCategory());
  }, [dispach]);

  return (
    <div className="">
      <div className="flex flex-row justify-around p-5 my-1 shadow-xl w-full h-25 ">
        <div className="flex flex-row justify-around w-1/2">
       <div className="w-1/2 flex flex-row justify-around">

        { open ? <button className="bg-blue-400 rounded-xl font-bold text-white h-10 w-24" onClick={()=>navigate("/")}>Back</button>:" "}
        { open ? <Categories/>:<button className="bg-blue-400 rounded-xl font-bold text-white" onClick={()=>setOpen(!false)}>Filter Product</button>}
       </div>
        </div>
        <div className="w-1/2 place-items-center ">

         <button className="place-items-center bg-blue-400 p-2 rounded-xl font-bold text-white" onClick={() => handleAdd()}>Add Products</button>
         <div className=" flex place-items-center w-8 h-8 float-right" onClick={()=>navigate("/fevorites")}>
          <img className="w-10 h-7  bg-red-500" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMZtTHa0iVo6CfiA0VnMyXr4L0y6Ar38yVLDLWgIrx3VmdcbRsRDaXZ4D74j2PyQnLDCQ&usqp=CAU" alt="" />
          <p className="z-30 relative pb-3.5 font-bold mr-10">{favourites.length}</p>
         </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-8">
      {Products.map((e) => {
        return <Card key={e._id} {...e} />;
      })}
      </div>
    </div>
  );
};

export default Home;
