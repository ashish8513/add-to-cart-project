import React from 'react'
import { useCart } from 'react-use-cart'

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart();
    if (isEmpty) return <h1 className='text-center text-5xl text-black font-semibold '>  Your cart is empty</h1>
    
    return (
        // <section className='py-4 container'>
        //     <div className='row justify-center'>
        //         <div className='col-12 '>
        //             <h5>cart ({totalUniqueItems}) total Items:({totalItems})</h5>
        //             <table className='table m-0'>
        //                 <tbody>
        //                     {
        //                         items.map((item, index) => {
        //                             return (
        //                                 <tr key={index}>
        //                                     <td>
        //                                         <img src={item.img} style={{ height: '6rem' }} />
        //                                     </td>
        //                                     <td>{item.title}</td>
        //                                     <td>{item.price}</td>
        //                                     <td>Quantity:({item.quantity})</td>
        //                                     <td>
        //                                         <button className='btn btn-info ms-2' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}> - </button>
        //                                         <button className='btn btn-info ms-2' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}> + </button>
        //                                         <button className='btn btn-danger ms-2' onClick={() => removeItem(item.id)}> Remove items</button>
        //                                     </td>
        //                                 </tr>
        //                             )
        //                         })
        //                     }
        //                 </tbody>
        //             </table>
        //         </div>
        //         <div className=''>
        //             <h2>total price:${cartTotal}</h2>
        //         </div>
        //         <div className=''>
        //             <button className='btn btn-danger m-2 ' onClick={() => emptyCart()}>Clear Cart</button>
        //             <button className='btn btn-primary m-2 '>buy Cart</button>
        //         </div>

        //     </div>
        // </section>
        <>


            <div class="container mx-auto mt-10 text-black">
                <div class="flex shadow-md my-10 row">
                    <div class="w-3/4 bg-white px-10 py-10">

                        <div class="flex justify-between border-b pb-8">
                            <h1 class="font-semibold text-2xl">Shopping Cart</h1>
                            <h1 className='font-semibold text-2xl'>cart ({totalUniqueItems}) total Items:({totalItems})</h1>
                        </div>
                        <div class="flex mt-10 mb-5">
                            <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                            <h3 class="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
                            <h3 class="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
                            <h3 class="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
                        </div>
                        {
                            items.map((item, index) => {
                                return (
                                    <>


                                        <div key={index} class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5 ">
                                            <div class="flex w-2/5">
                                                <div class="w-20">
                                                    <img class="h-24" src={item.img} alt="Product Image" />
                                                </div>
                                                <div class="flex flex-col justify-between ml-4 flex-grow">
                                                    <span class="font-bold text-sm">{item.title}</span>
                                                    <span class="text-red-500 text-xs">Quantity:({item.quantity})</span>
                                                    <a href="#" class="font-semibold hover:text-red-500 text-gray-500 text-xs" onClick={() => removeItem(item.id)}>Remove</a>
                                                </div>
                                            </div>
                                            <div class="flex justify-center w-1/5">
                                                <button className='btn btn-info ms-2' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}> - </button>
                                                <button className='btn btn-info ms-2' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}> + </button>
                                            </div>
                                            <span class="text-center w-1/5 font-semibold text-sm">{item.price}</span>
                                            <span class="text-center w-1/5 font-semibold text-sm">${cartTotal}</span>
                                        </div>


                                    </>
                                )
                            })
                        }
                        <div className='float-right'>
                            <button className='btn btn-danger m-2 ' onClick={() => emptyCart()}>Clear Cart</button>
                            <button className='btn btn-primary m-2 '>buy Cart</button>
                        </div>
                        <a href="#" class="flex font-semibold text-indigo-600 text-sm mt-10">
                            <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296.41L107.59 320l99.165 99.165 16.97 17 16.97-17L448 187.59l-26.47-26.47-268.59 269.18-99.165-99.165 26.47-26.47 59.053 59.054z" /></svg>
                            Continue Shopping
                        </a>
                    </div>
                    {/* ----------------------right side of the page -------------------------- */}
                    <div id="summary" class="w-1/4 px-8 py-10">
                        <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                        <div class="flex justify-between mt-10 mb-5">
                            <span class="font-semibold text-sm uppercase">total Items:({totalItems})</span>
                            <span class="font-semibold text-sm">{cartTotal}</span>
                        </div>
                        <div>
                            <label class="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                            <select class="block p-2 text-gray-600 w-full text-sm">
                                <option>Standard shipping - $10.00</option>
                            </select>
                        </div>
                        <div class="py-10">
                            <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                            <input type="text" id="promo" placeholder="Enter your code" class="p-2 text-sm w-full" />
                        </div>
                        <button class="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
                        <div class="border-t mt-8">
                            <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                                <span>Total cost:-</span>
                                <span>${cartTotal}</span>
                            </div>
                            <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Cart