import React from "react"
import images from "../../assets/cart/cart-empty.jpg"

export function CartEmpty() {
    return (
        <div className='text-center'>
            <img className='w-[300px] h-[280px] m-auto sm:h-[300px]' src={images} alt='cart empty'/>
            <p className='text-2xl'>Корзина пуста!</p>
            <p className='text-base my-2 text-gray-500'>Но никогда не поздно это исправить:)</p>
        </div>
    )
}