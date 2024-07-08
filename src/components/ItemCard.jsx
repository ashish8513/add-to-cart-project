import React from 'react'
import { useCart } from 'react-use-cart'

const ItemCard = (props) => {
    const { addItem } = useCart();
    return (
        <div className='card card-compact  w-96 shadow-xl  '>
            <div className="card p-0  shadow flex justify-center items-center">
                <figure className='relative pb-2/3'>
                    <img
                        className='card-img-top w-96 h-60  inset-0 object-cover '
                        src={props.img}
                        alt="phone" />
                </figure>
                <div className="card-body flex items-center justify-center">
                    <h5 className="card-title text-black ">{props.title}</h5>
                    <p className='card-text text-black'>{props.desc}</p>
                    <h5 className='card-text text-black font-semibold text-xl'>${props.price}</h5>
                    <div className="card-actions justify-end float-right">
                        <button className="btn btn-success "
                            onClick={() => addItem(props.item)}
                        >Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCard
