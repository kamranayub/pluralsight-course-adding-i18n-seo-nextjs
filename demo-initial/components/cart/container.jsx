'use client';

import { useEffect, useRef, useState } from 'react';
import { useCart } from './cart-context';
import { createCartAndSetCookie } from './actions';
import OpenCart from './open-cart';
import CartModal from './modal';

export default function CartContainer() {
  const { cart } = useCart();
  const quantityRef = useRef(cart?.totalQuantity);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!cart) {
      createCartAndSetCookie();
    }
  }, [cart]);

  useEffect(() => {
    if (
      cart?.totalQuantity &&
      cart?.totalQuantity !== quantityRef.current &&
      cart?.totalQuantity > 0
    ) {
      if (!isOpen) {
        setIsOpen(true);
      }
      quantityRef.current = cart?.totalQuantity;
    }
  }, [isOpen, cart?.totalQuantity, quantityRef]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  return (
    <>
      <button aria-label="Open cart" onClick={openCart}>
        <OpenCart quantity={cart?.totalQuantity} />
      </button>
      <CartModal isOpen={isOpen} closeCart={closeCart} />
    </>
  );
}
