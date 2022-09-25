import React from "react";
import { useNavigate } from "react-router-dom";
import {
  addTofavoutite,
  getDetails,
  removeProduct,
} from "../ReduxToolkit/features/userSlice";
import { useAppDispatch } from "../ReduxToolkit/Hooks";
import { IproductItemsProps } from "./pages/Home";
const Card = (props: IproductItemsProps) => {
  const { _id, name, avatar } = props;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleclick = () => {
    dispatch(getDetails(_id));
    navigate(`/products/${_id}`);
  };
  return (
    <div className="border-solid border-2 border-indigo-600 hover:bg-sky-700">
      <p>{_id}</p>
      <img
        className="w-7 h-7 z-40 bg-red-500 float-right"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMZtTHa0iVo6CfiA0VnMyXr4L0y6Ar38yVLDLWgIrx3VmdcbRsRDaXZ4D74j2PyQnLDCQ&usqp=CAU"
        alt=""
      />
      <img className="w-full h-80 z-30" src={avatar} alt="" />
      <p>{name}</p>
      <button onClick={() => handleclick()}>Details</button>
      <div>
        <button
          onClick={() => {
            dispatch(addTofavoutite(props));
          }}
        >
          Add To favoutite
        </button>
        <button
          onClick={() => {
            dispatch(removeProduct(`${_id}`));
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
