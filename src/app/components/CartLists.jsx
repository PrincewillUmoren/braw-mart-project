"use client"
import { MdCancel } from "react-icons/md";
import { useContext, useState } from "react";
import { SidebarContext } from "../providers";
import Image from "next/image";
import CartInput from "./CartInput";

export default function CartLists() {
    const { cartList, cartItems, setCartList } = useContext(SidebarContext);

    const [quantities, setQuantities] = useState(
        cartItems.reduce((acc, _, index) => {
            acc[index] = 1; 
            return acc;
        }, {})
    );

    function handleCartList() {
        setCartList(!cartList);
    }

    function handleValChange(e, index) {
        const newVal = parseInt(e.target.value, 10);
        if (!isNaN(newVal)) {
            setQuantities((prev) => ({
                ...prev,
                [index]: newVal,
            }));
        }
    }

    return (
        <>{
            
                cartList && (
                    <aside className="absolute right-0 w-2/5 h-screen bg-gray-200 rounded-l-lg overflow-auto">
                    <div className="flex justify-between capitalize text-2xl px-16 py-8">
                <p>cart items</p>
                <MdCancel
                className="text-2xl cursor-pointer"
                onClick={handleCartList}
                />
                </div>
                <div>
                {cartItems.length == 0 ? (

<h2 className="italic text-2xl font-bold">Cart is empty, add item to view cart</h2> 
)
: 
                        <table className="text-left m-auto capitalize w-4/5">
                            <thead>
                                <tr>
                                    <th>photo</th>
                                    <th>title</th>
                                    <th>value</th>
                                    <th>price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item, index) => (
                                    <tr key={index}>
                                        <td className="py-4">
                                            <Image
                                                src={item.img}
                                                alt={item.title}
                                                width={100}
                                                height={100}
                                                className="rounded-full w-[100px] h-[100px]"
                                                />
                                        </td>
                                        <td>{item.title}</td>
                                        <td>
                                            <CartInput
                                                val={quantities[index]}
                                                handle={(e) => handleValChange(e, index)}
                                                />
                                        </td>
                                        <td>{item.price * quantities[index]}</td>
                                    </tr>
                                ))}
                            
                            </tbody>
                        </table>
}
                    </div>
                </aside>
            )}
        </>
    );
}
