import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";
const Cart = () => {
  // state ko access karne ke leaye useSelector() hook ka use keaya hai
  const { cart } = useSelector((state) => { return state; });
  const [totalAmount, setTotalAmount] = useState(0);

  /*cart me jab bhi add ya remove hoga that time we set the 
  value of totalAmount thats why we used here useEffect()
  hook and make the dependency cart it self
  
  By the help of reduce function we get the totalAmount value 
  reduce method take the 2 parameter accumulater, that means 
  value kha se start karni hai hamne yha par 0 se keaye hai
  , 2nd item, jiske sath hame accumulater se opration perform karana hai
  we are doing here addition.

  */

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  console.log(cart);

  return (
    <div >
    {cart.length > 0 ? (
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">
      
        <div className="w-[100%] md:w-[60%] flex flex-col p-2">
          {cart.map((item, index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />;
          })}
        </div>

        <div className="w-[100%] md:w-[40%] mt-5  flex flex-col">
          <div className="flex flex-col p-5 gap-5 my-14  h-[100%] justify-between">
          <div className="flex flex-col gap-5 ">
          <div className="font-semibold text-xl text-green-800 ">Your Cart</div>
            <div className="font-semibold text-5xl text-green-700  -mt-5">Summary</div>
            <p className="text-xl">
              <span className="text-gray-700 font-semibold text-xl">Total Items: {cart.length}</span>
            </p>
          </div>
          </div>

          <div className="flex flex-col">
            <p className="text-xl font-bold"><span className="text-gray-700 font-semibold">Total Amount:</span> ${totalAmount}</p>
            <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">CheckOut Now</button>
          </div>
          
        </div>
      </div>
    ) : (
      <div className="min-h-[80vh] flex flex-col items-center justify-center">
        <h1 className="text-gray-700 font-semibold text-xl mb-2">
          Your cart is empty!
        </h1>
        <NavLink to={"/"}>
          <button className="uppercase bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">
            Shop Now
          </button>
        </NavLink>
      </div>
    )}
  </div>
  );
}
export default Cart;
