import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDetails } from "../../ReduxToolkit/features/userSlice";
import { useAppDispatch, useAppSelector } from "../../ReduxToolkit/Hooks";

const Details = () => {
  const dispach = useAppDispatch();
  const { id } = useParams();
  const data = useAppSelector((state) => state.app.details);
  const navigate=useNavigate()
  useEffect(() => {
    dispach(getDetails(`${id}`));
  }, [dispach, id]);
  return (
    <>
      <button onClick={()=>navigate("/")} className=" text-gray-900 mt-2 text-center bg-blue-400 w-28 h-9 rounded">
          Back
        </button>
    <div className=" border border-gray-900 w-1/2 m-auto rounded-2xl shadow-2xl hover:text-xl hover:bg-blue-300">
      <div className="hover:shadow-cyan">
        <img className="w-full h-96 bg-cover bg-center  " src={data.avatar} alt="" />
        <div className=" ml-2 border-t-2">
          <div className="flex  m-1.5">
            <p className="font-bold">Name :</p>
            <p>{data.name}</p>
          </div>
          <div className="flex  m-1.5">
            <p className="font-bold">Category :</p>
            <p>{data.category}</p>
          </div>
          <div className="flex  m-1.5">
            <p className="font-bold">Price :</p>
            <p>{data.price}</p>
          </div>
          <div className="flex  m-1.5">
            <p className="font-bold">Devoloper :</p>
            <p>{data.developerEmail}</p>
          </div>
          <div className="flex  m-1.5">
            <p className="font-bold">Description :</p>
            <p>{data.description}</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Details;
