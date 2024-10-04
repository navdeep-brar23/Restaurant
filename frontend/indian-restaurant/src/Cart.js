import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const Cart = ({ cart, show, handleClose, removeFromCart, increaseQuantity, decreaseQuantity }) => {
  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cart.length > 0 ? (
          <>
            <ul className="list-group">
              {cart.map((item, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <strong>{item.name}</strong> <br />
                    Spiciness: {item.spiciness} <br />
                    Quantity: {item.quantity} <br />
                    <span>Price (per item): ${item.price.toFixed(2)}</span> <br />
                    <span><strong>Total: ${(item.price * item.quantity).toFixed(2)}</strong></span>
                  </div>
                  <div>
                    <Button variant="outline-success" onClick={() => increaseQuantity(item.id)} className="ms-2">
                      +
                    </Button>
                    <Button variant="outline-danger" onClick={() => decreaseQuantity(item.id)} className="ms-2">
                      -
                    </Button>
                    <Button variant="danger" onClick={() => removeFromCart(item.id)} className="ms-2">
                      Remove
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
            <h5 className="mt-3">Total Price: ${totalPrice.toFixed(2)}</h5>
          </>
        ) : (
          <p>Your cart is empty!</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => alert('Proceeding to checkout...')}>
          Checkout
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
