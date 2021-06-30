import { GET_PRODUCTS, ADD_PRODUCTS } from "../constant/type";

const initState = {
  products: [
    {
      id: 1,
      title: "The lense startup :How to control the innnovation",
      price: 111,
      rating: 3,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/65/Product_Photography.jpg",
    },
    {
      id: 2,
      title: "The lense startup :How to control the innnovation",
      price: 111,
      rating: 3,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/65/Product_Photography.jpg",
    },
    {
      id: 3,
      title: "The lense startup :How to control the innnovation",
      price: 111,
      rating: 3,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/65/Product_Photography.jpg",
    },
  ],
  basket: [],
};

export const productReducer = (state = initState, action) => {
  console.log(action.payload, "tetstnsdsn");
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    case ADD_PRODUCTS:
      return {
        ...state,
        basket: [action.payload, ...state.basket],
      };
    default:
      return state;
  }
};
