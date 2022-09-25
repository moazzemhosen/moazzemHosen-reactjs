import React from "react";

const Form = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto">
        <div className="text-center font-medium text-xl">something</div>
        <div className="text-3xl font-bold text-gray-900 mt-2 text-center">
          Anathor
        </div>
      </div>
      <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border-gray-300">
        <form className=" space-y-6">
            <div>
                <label htmlFor="" className=" skew-y-6">Name</label>
            <input type="text" />
            </div>
            <div>
                <label htmlFor="" className=" skew-y-6">Name</label>
            <input type="number" />
            </div>
            <div>
                <label htmlFor="" className=" skew-y-6">category</label>
            <select name="" id="" className=" w-full p-2 bg-gray-300 rounded mt-1">
                <option value="a">a</option>
                <option value="v">f</option>
                <option value="b">g</option>
                <option value="h">b</option>
                <option value="h">g</option>
            </select>
            </div>
            <div>
                <label htmlFor="" className=" skew-y-6">Description</label>
            <input type="text" />
            </div>
            <div>
                <label htmlFor="" className=" skew-y-6">Avatar</label>
            <input type="text" />
            </div>
            <div>
                <label htmlFor="" className=" skew-y-6">Devoloper</label>
            <input type="text" />
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
