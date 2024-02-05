const { createSlice } = require("@reduxjs/toolkit");

export const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    /* reducers function input me 2 cheej lete hai 1st is "state" 
    and 2nd is "action"kisi dusre function se ham ye reducers ke 
    function ko call kar rhe hai yha ham "Product.js" file se ye 
    dono function addItem() and removeItem() ko call kar rhe hai or
    vha par unke andar ek value pass kar rhe hai us value ko slice vali 
    file ke andar access karne ke leaye "action.payload" name ke keyword 
    ka use karte hai. action.payload show karta hai aapne jo bhi vha 
    input pass keaye hai function ke andar.
  */
    addItem: (state, action) => {
      state.push(action.payload);
    },

    removeItem: (state, action) => {
      /* item.id jo bhi input se aa rhe hai uske barabar na ho un sabhi 
      ko rakhna hai remaining ko remove karna hai.*/
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = CartSlice.actions;
export default CartSlice.reducer;
