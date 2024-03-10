import React from 'react'

const Cart = () => {
  return (
    <div className='h-fit relative w-full  flex flex-col items-center bg-green-200  box-border '>
        <h1>Youru Selected Item</h1>
        <div className='flex w-full justify-around'>
            <div>left item</div>
            <div>right item</div>
        </div>
        <button>Checkout</button>
    </div>
  )
}

export default Cart
