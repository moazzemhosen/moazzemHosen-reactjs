import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { IFormInput } from "../../components/pages/Form";

type IproductItemsProps = {
  avatar: string;
  category: string;
  description: string;
  developerEmail: string;
  name: string;
  price: number;
  _id: string;
};

export type ICategoryProps = {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type InitialState = {
  status: string;
  products: IproductItemsProps[];
  category: ICategoryProps[];
  details: IproductItemsProps;
  favourites: IproductItemsProps[];
};

export const status = Object.freeze({
  IDEL: "ok",
  ERROR: "error",
  LOADING: "loading",
});

const initialState: InitialState = {
  status: "ok",
  products: [],
  category: [],
  favourites: JSON.parse(`${localStorage.getItem("Favourite")}`) || [],
  details: {
    _id: "",
    name: "",
    price: 0,
    avatar: "",
    category: "",
    description: "",
    developerEmail: "",
  },
};

const userSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addTofavoutite: (state, action: PayloadAction<IproductItemsProps>) => {
      state.favourites.push(action.payload);
      localStorage.setItem("Favourite", JSON.stringify(state.favourites));
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        ({ _id }) => _id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.status = status.LOADING;
      })
      .addCase(
        getProduct.fulfilled,
        (state, action: PayloadAction<IproductItemsProps[]>) => {
          state.products = action.payload;
          state.status = status.IDEL;
        }
      )
      .addCase(getProduct.rejected, (state) => {
        state.status = status.ERROR;
      })

      .addCase(getCategory.pending, (state) => {
        state.status = status.LOADING;
      })
      .addCase(
        getCategory.fulfilled,
        (state, action: PayloadAction<ICategoryProps[]>) => {
          state.category = action.payload;
          state.status = status.IDEL;
        }
      )
      .addCase(getCategory.rejected, (state) => {
        state.status = status.ERROR;
      })
      .addCase(getDetails.pending, (state) => {
        state.status = status.LOADING;
      })
      .addCase(
        getDetails.fulfilled,
        (state, action: PayloadAction<IproductItemsProps>) => {
          state.details = action.payload;
          state.status = status.IDEL;
        }
      )
      .addCase(getDetails.rejected, (state) => {
        state.status = status.ERROR;
      });
  },
});

export const getProduct = createAsyncThunk("product/get", () => {
  let config = {
    headers: {
      Authorization:
        "Bearer " +
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1vYXp6ZW1ob3NlbjlAZ21haWwuY29tIiwiZ2l0aHViIjoiaHR0cHM6Ly9naXRodWIuY29tL21vYXp6ZW1ob3NlbiIsImlhdCI6MTY2NDAwNzAxMywiZXhwIjoxNjY0NDM5MDEzfQ.dmhn1sJOVa4cgCQ-3bnjd51d0eo6WeXiW7PmXdmxkLY",
    },
  };
  return axios
    .get("https://upayments-studycase-api.herokuapp.com/api/products", config)
    .then((res) => {
      // console.log(res.data);
      return res.data.products;
    });
});

export const getCategory = createAsyncThunk("categoty/get", () => {
  let config = {
    headers: {
      Authorization:
        "Bearer " +
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1vYXp6ZW1ob3NlbjlAZ21haWwuY29tIiwiZ2l0aHViIjoiaHR0cHM6Ly9naXRodWIuY29tL21vYXp6ZW1ob3NlbiIsImlhdCI6MTY2NDAwNzAxMywiZXhwIjoxNjY0NDM5MDEzfQ.dmhn1sJOVa4cgCQ-3bnjd51d0eo6WeXiW7PmXdmxkLY",
    },
  };
  return axios
    .get("https://upayments-studycase-api.herokuapp.com/api/categories", config)
    .then((res) => {
      return res.data.categories;
    });
});
export const getDetails = createAsyncThunk("details/get", (id: string) => {
  let config = {
    headers: {
      Authorization:
        "Bearer " +
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1vYXp6ZW1ob3NlbjlAZ21haWwuY29tIiwiZ2l0aHViIjoiaHR0cHM6Ly9naXRodWIuY29tL21vYXp6ZW1ob3NlbiIsImlhdCI6MTY2NDAwNzAxMywiZXhwIjoxNjY0NDM5MDEzfQ.dmhn1sJOVa4cgCQ-3bnjd51d0eo6WeXiW7PmXdmxkLY",
    },
  };
  return axios
    .get(
      `https://upayments-studycase-api.herokuapp.com/api/products/${id}`,
      config
    )
    .then((res) => {
      
      return res.data.product;
    });
});
export const createProduct = createAsyncThunk("product/form", (data:IFormInput) => {
  //console.log("crData",data);
  
  let config = {
    
    headers: {
      "Content-Type":"application/json",
      Authorization:
        "Bearer " +
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1vYXp6ZW1ob3NlbjlAZ21haWwuY29tIiwiZ2l0aHViIjoiaHR0cHM6Ly9naXRodWIuY29tL21vYXp6ZW1ob3NlbiIsImlhdCI6MTY2NDAwNzAxMywiZXhwIjoxNjY0NDM5MDEzfQ.dmhn1sJOVa4cgCQ-3bnjd51d0eo6WeXiW7PmXdmxkLY",

    },
  };
  let body=JSON.stringify(data)
 // console.log("body",body);
  
  return axios
    .post("https://upayments-studycase-api.herokuapp.com/api/products",body,config)
    .then((res) => {
      console.log(res.data);
      return res.data.products;
    });
  
});
export default userSlice.reducer;
export const { removeProduct, addTofavoutite } = userSlice.actions;
