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
  const { _id, name, avatar, category } = props;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleclick = () => {
    dispatch(getDetails(_id));
    navigate(`/products/${_id}`);
  };
  return (
    <div className="border-solid border-2 border-gray-300 rounded hover:bg-sky-300 hover:shadow-2xl hover:rounded-lg">
      {/* <p>{_id}</p> */}
      <img
        className="w-7 h-7 z-40 bg-red-500 float-right"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMZtTHa0iVo6CfiA0VnMyXr4L0y6Ar38yVLDLWgIrx3VmdcbRsRDaXZ4D74j2PyQnLDCQ&usqp=CAU"
        alt=""
      />
      <img className="w-full h-80 z-30 pb-6" src={avatar} alt="" />
      <div className="flex justify-between w-full">
        <div className=" w-1/2">
          <p>
            <span className="font-bold">Name:</span> {name}
          </p>
          <p>
            <span className="font-bold">Category:</span>
            {category}
          </p>
        </div>
        <div className="pb-4 w-1/2">
          <button
            className="text-white bg-indigo-500 w-full rounded-2xl mb-2"
            onClick={() => handleclick()}
          >
            Details
          </button>
          <div className="flex gap-4">
            <button
              className="font-bold text-white bg-green-700 hover:bg-green-400 rounded"
              onClick={() => {
                dispatch(addTofavoutite(props));
              }}
            >
              Add Fevorite
            </button>
            <button
              className="font-bold bg-red-800  text-white w-1/3 hover:bg-red-400 rounded"
              onClick={() => {
                let Yes = prompt("Are You sure to delete?", "Yes");
                //console.log("Yes",Yes);

                if (Yes == "Yes") {
                  alert(`Deleting ${name}`);
                  dispatch(removeProduct(`${_id}`));
                }
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
