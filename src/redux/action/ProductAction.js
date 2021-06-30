import { GET_PRODUCTS, ADD_PRODUCTS } from "../constant/type";
import store from "../store/store";
export const setProducts = (product) => ({
  type: ADD_PRODUCTS,
  payload: product,
});

export const addProducts = (products) => {
  const state = store.getState();
  console.log(state, "action data");
  console.log(products, "add products");
  products = [...state.basket, products];
};

// app.js
import { Provider } from "react-redux";
import store from '../redux'
<Privider store={}>
  <div>

  </div>
</Privider>

// // reducer.js
// const initialState={
// data:"sample"
// }
// export const productReducer=(state=initialState,action)=>{
//   switch(action.type){
//     case "GET_PRODUCTS":
//       return{
//       ...state,
//       data:action.data
//       }
//    }
//   return state
// }
// // action.js
// export const setName=(name)=>{
//   return{
//     type:"SET_NAME",
//     name
//   }
// }

// // index.js
// import{combineReducers,createStore,applyMiddleware} from "redux"
// import test from "../test"
// import thunk from 'redux-thunk';

// const combineReducer=combineReducers({
//   test
// })

// const store = createStore({
//   combineReducer,
//   applyMiddleware(thunk)
  
// })
// export default store;


// // test.js
// import React,{Component} from "react"
// import {connect} from "react-redux"
// import {getData} from "tets"
// import { Component } from "react";
// const mapStateToProps=(state)=>{
//  return{
//    ProductsState:state.test
//  }
// }

// const mapDispatchToProps=(dispatch)=>{
//   return{
// getData:()=>dispatch(getData())
    
//   }
// }
//  class Products extends Component{
// render(){
//   return (
//     <div>

//     </div>
//   )
// }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(Products)