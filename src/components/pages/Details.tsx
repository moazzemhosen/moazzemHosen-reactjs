import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetails } from "../../ReduxToolkit/features/userSlice";
import { useAppDispatch, useAppSelector } from "../../ReduxToolkit/Hooks";

const Details = () => {
  const dispach = useAppDispatch();
  const { id } = useParams();
  const data = useAppSelector((state) => state.app.details);

  useEffect(() => {
    dispach(getDetails(`${id}`));
  }, [dispach, id]);
  return (
    <div className=" border border-gray-900 w-1/2 m-auto">
      <div className="hover:shadow-cyan">
        <img className="w-full h-96 border border-gray-900" src={data.avatar} alt="" />
        <div className=" ml-2">
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
  );
};

export default Details;
