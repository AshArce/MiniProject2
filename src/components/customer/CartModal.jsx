import React from 'react';
import { Modal, Button } from '@mui/material';
import ShopingCart from './ShopingCart'

const CartModal = ({ isOpen, onClose, cart, removeFromCart, updateQuantity }) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <div>
        <ShopingCart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
        <Button variant="contained" color="secondary" onClick={onClose}>
          Close
        </Button>
      </div>
    </Modal>
  );
};

export default CartModal;
