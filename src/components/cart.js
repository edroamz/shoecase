import React from 'react';
import CartShoppingBag from './cartShoppingBag';
import CartPaymentDetails from './cartPaymentDetails';
import ContactDetails from './contactDetails';
import { useCartState } from '../context/cartContext';

const Cart = () => {
  const { isCartEmpty } = useCartState();

  return (
    <div className='flex flex-wrap bg-gray-200 lg:items-stretch'>
      <section
        id='leftColumn'
        className='w-full lg:w-4/6 xl:max-w-4xl mx-auto pt-12 lg:py-16 px-4 md:px-6 lg:px-12'
      >
        <CartShoppingBag></CartShoppingBag>
      </section>
      <section id='rightColumn' className='w-full lg:w-2/6'>
        {isCartEmpty ? (
          <ContactDetails></ContactDetails>
        ) : (
          <CartPaymentDetails></CartPaymentDetails>
        )}
      </section>
    </div>
  );
};

export default Cart;
