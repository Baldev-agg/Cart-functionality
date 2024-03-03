//import { useState } from "react"
import { useSelector,useDispatch } from "react-redux";
import { addToCart,removeFromCart } from "../../store/slices/cart-slice";


export default function ProductTile({ product }) {
   
    const dispatch = useDispatch();
    const {cart}= useSelector((state)=>state);

    function handleAddToCart(){
        dispatch(addToCart(product));
    }
    function handleRemoveFromCart(){
        dispatch(removeFromCart(product.id));
    }
    return (
        <div>
            <div className="group flex flex-col items-center border-2 border-gray-600 gap-3 p-4 h-[360px] mt-20 ml-5 rounded-xl">
                <div className="h-[180px]">
                    <img
                        src={product?.image}
                        alt={product?.title}
                        className="object-cover h-full w-full"
                    />
                </div>
                <div>
                    <h1 className="w-40 truncate -mt-1.5 text-gray-700 font-bold text-lg">
                        {product?.title}
                    
                    </h1>
                    <h3 className="w-40 mt3 text-black">
                    {product?.price}$
                    </h3>
                    <p>{product?.count}</p>
                </div>
                <div className="flex items-center justify-center w-full mt-4">
                    <button
                        onClick={
                            cart.some((item) => item.id === product.id)
                                ? handleRemoveFromCart
                                : handleAddToCart
                        }
                        className="bg-black text-white border-2 rounded-lg font-bold p-4"
                    >
                        {/* {cart.some((item) => item.id === product.id)
                            ? "Remove from cart"
                            : "Add to cart"} */}
                            {
                                cart.some((item)=>item.id === product.id)
                                ?"Remove from cart":"Add to cart"
                            }
                         
                    </button>
                </div>
            </div>
        </div>
    )
}