import { useContext, useState, useEffect } from 'react';
import { CartsContext } from '../context/CartsContext';

// menu either comes from context or as an argument at invocation
const useCarts = () => {
  const [carts, setCarts, resId, setResId] = useContext(CartsContext);

  function getCopy(collection) {
    return JSON.parse(JSON.stringify(collection));
  }

  function addCart(newCart) {
    let copy = getCopy(carts);
    copy.push(newCart);
    setCarts(copy);
  }

  function initializeCart(restaurantId) {
    let newCart = {};
    newCart["restaurantId"] = restaurantId;
    newCart["cart"] = [];
    addCart(newCart);
    return [];
  }

//   function findIndex(resId) {
//     return carts.findIndex(cart => cart.restaurantId === resId);
//   }

  function findCart(restaurantId) {
    let cart = carts.find(cart => cart.restaurantId === restaurantId);
    if (cart) {
      return getCopy(cart.cart);
    }

    return null;
  }

  // ?
//   function updateCarts(cart, resId) {
//     let resCartsCopy = getCopy(carts);
//     console.log("updateCarts before: " + JSON.stringify(resCartsCopy));
//
//     console.log(`resId updateCarts: ${resId}`);
//
//     resCartsCopy = resCartsCopy.map((res) => {
//       if (res.restaurantId === resId) {
//         res.cart = cart;
//       }
//
//       return res;
//     });
//
//     console.log("updateCarts after: " + JSON.stringify(resCartsCopy));
//     setCarts(resCartsCopy);
//   }


  function updateCart(restaurantId, cartCopy) {
    console.log("useCarts.updateCart");
    let cartsCopy = getCopy(carts);
//     let idx = findIndex(cartCopy);
//     cartsCopy.splice(idx, 1, cartCopy);
    cartsCopy[restaurantId].cart = cartCopy;
    setCarts(cartsCopy);
  }

 // ?
 function loadCart(restaurantId){
    let cartCopy = findCart(restaurantId);
    console.log("current cart in useCarts.loadCart: " + JSON.stringify(cartCopy));
    if (cartCopy === null) {
      cartCopy = initializeCart(restaurantId);
    }

    return cartCopy;
 }

//  function loadCart(restaurantId, setCart) {
//   let cartCopy = findCart(restaurantId);
//
//   console.log("current cart in loadCart: " + JSON.stringify(cartCopy));
//   if (cartCopy === null) {
//     cartCopy = initializeCart(restaurantId);
//   }
//
//   setCart(cartCopy);
//  }

  return {
    carts,
    resId,
    setResId,
    loadCart,
    setCarts,
//     updateCarts
    updateCart
  }
};

export default useCarts;
