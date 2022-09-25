import { useEffect } from "react";
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
  const dispach = useAppDispatch();
  const navigate = useNavigate();
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
    <div className="grid grid-cols-4 gap-4 ">
      <Categories />
      <button onClick={() => handleAdd()}>Add Products</button>
      {Products.map((e) => {
        return <Card key={e._id} {...e} />;
      })}
    </div>
  );
};

export default Home;
