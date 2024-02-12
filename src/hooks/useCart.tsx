import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

// menu either comes from context or as an argument at invocation
const useCart = () => {
  const [cart, setCart] = useContext(CartContext);

  function findIndex(arr, id) {
    return arr.findIndex(item => item.id === id);
  }

  function flattenMenu(menuCopy) {
    let flatter = menuCopy.map(section => section.data);
    return flatter.flat();
  }

//   function addItem(id) {
  function addItem(id, quantity, menu) {
    if (quantity === '0') {
      return;
    }

    let cartClone = getCopy(cart);
    let menuCopy = getCopy(menu);
    menuCopy = flattenMenu(menuCopy);
    let index = findIndex(menuCopy, id);
    let item = menuCopy[index];
    item.quantity = String(quantity);
    cartClone.push(item);
    setCart(cartClone);
  }

  function deleteItem (id) {
    let cartClone = getCopy(cart);
    let index = findIndex(cart, id);
    cartClone = cartClone.filter((el, idx) => {
      return index !== idx;
    });

    setCart(cartClone);
  }

//   function editItem (id, type) {
  function editItem (id, quantity) {
    // won't be necessary after we figure out how to reset modal state
    if (quantity === '0') {
      return;
    }

    let cartClone = getCopy(cart);
    let index = findIndex(cart, id);
    let item = cartClone[index];
    item.quantity = String(quantity);
    setCart(cartClone);
  }

  function getCopy(arr) {
    return JSON.parse(JSON.stringify(arr));
  }

  function cartTotal() {
    let total = 0;

    cart.forEach(item => {
      let cost = Number(item.cost);
      let quantity = Number(item.quantity);

      total += cost * quantity;
    });

    return total.toFixed(2);
  }

  return {
    cart,
    deleteItem,
    editItem,
    addItem,
    findIndex,
    getCopy,
    cartTotal
  }
};

export default useCart;
