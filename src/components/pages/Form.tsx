 import React from "react";
 import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../ReduxToolkit/features/userSlice";
import { useAppDispatch } from "../../ReduxToolkit/Hooks";
 
 export type IFormInput= {
  name:string,
  price:number,
  description:string,
  category:string,
  developerEmail:string,
  avatar:string
}

const Form = () => {
  const {register,handleSubmit}=useForm<IFormInput>();
  ;
  const dispatch=useAppDispatch()

  const onSubmit = (data: IFormInput) => {
 
    dispatch(createProduct(data))
  };
  const navigate=useNavigate()


  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto">
        <div className="text-center font-medium text-xl">Add a New Products</div>
        <button onClick={()=>navigate("/")} className=" text-gray-900 mt-2 text-center bg-blue-400 w-28 h-9 rounded">
          Back
        </button>
      </div>

      <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border-gray-300">
        <form className=" space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="" className=" skew-y-6">Name</label>
            <input 
            {...register("name")}
              type="text" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div>
                <label htmlFor="" className=" skew-y-6">Price</label>
            <input
            {...register("price")}
             type="number" 
             name="price"
             className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div>
                <label htmlFor="" className=" skew-y-6">Category</label>
            <select 
            {...register("category")}
             name="category" id="" className=" w-full p-2 bg-gray-300 rounded mt-1">
                <option value="Electronics">Electronics</option>
                <option value="Hobby">Hobby</option>
                <option value="Clothing">Clothing</option>
                <option value="Accessories">Accessories</option>
                <option value="Furniture">Furniture</option>
            </select>
            </div>
            <div>
                <label htmlFor="" className=" skew-y-6">Description</label>
            <input type="text" 
             {...register("description")}
             name="description"
             className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div>
                <label htmlFor="" className=" skew-y-6">Avatar</label>
            <input type="text" 
            {...register("avatar")}
             name="avatar" 
             className="w-full p-2 border border-gray-300 rounded"/>
            </div>
            <div>
                <label htmlFor="" className=" skew-y-6">Devoloper</label>
            <input type="text"
           {...register("developerEmail")}
             name="developerEmail"
             className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div>
                <button className=" w-full py-2  px-4 bg-blue-600 hover:bg-blue-700 text-white">Submit</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
