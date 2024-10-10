import React, { useState } from "react";
import { menuItems } from "./data";
import "./Menu.css";
import Profile from "./Profile";  // Import the Profile component
import { Offcanvas, Button, Modal, Form } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import Cart from './Cart'; // Import the Cart component

const Menu = () => {
  const [filter, setFilter] = useState("All");
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showProfile, setShowProfile] = useState(false);  // State to handle profile page
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [spiciness, setSpiciness] = useState("Mild");
  const [cart, setCart] = useState([]);

  // Filter items based on category
  const filteredItems = filter === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === filter);

  // Toggle offcanvas menu
  const toggleOffcanvas = () => setShowOffcanvas(prevShow => !prevShow);

  // Toggle modal for item details
  const toggleModal = () => setShowModal(prevShow => !prevShow);

  // Toggle cart modal
  const toggleCart = () => setShowCart(prevShow => !prevShow);

  // Open the modal with selected item details
  const handleItemClick = (item) => {
    setSelectedItem(item);
    setQuantity(1);         // Reset quantity for each item selection
    setSpiciness("Mild");   // Reset spiciness for each item selection
    toggleModal();          // Show item details modal
  };

  // Navigate to Profile page
  const goToProfile = () => {
    setShowProfile(true);
  };

  // Handle adding the item to the cart when clicked in the modal
  const handleAddToCart = () => {
    if (selectedItem) {
      setCart(prevCart => {
        const existingItem = prevCart.find(item => item.id === selectedItem.id && item.spiciness === spiciness);
        if (existingItem) {
          // Increase the quantity of the existing item in the cart
          return prevCart.map(item =>
            item.id === selectedItem.id && item.spiciness === spiciness
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        } else {
          // Add new item to the cart
          return [...prevCart, { ...selectedItem, quantity, spiciness }];
        }
      });
      toggleModal();  // Close the modal after adding to cart
    }
  };

  // Remove item from cart
  const removeFromCart = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  // Increase item quantity in cart
  const increaseQuantity = (itemId) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease item quantity in cart
  const decreaseQuantity = (itemId) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  // Count the number of items in the cart with a fallback check
  const cartCount = (cart || []).reduce((acc, item) => acc + item.quantity, 0);

  // Render Menu or Profile based on the current view
  if (showProfile) {
    return <Profile />;
  }

  return (
    <div className="menu-container">
      {/* Hamburger icon to toggle the offcanvas menu */}
      <Button variant="primary" className="hamburger-btn" onClick={toggleOffcanvas}>
        &#9776; {/* Hamburger icon */}
      </Button>

      {/* User and Cart buttons with icons */}
      <div className="user-cart-container">
        <Button variant="outline-primary" className="user-cart-btn" onClick={goToProfile}>
          <FaUser />
        </Button>
        <Button variant="outline-success" className="user-cart-btn" onClick={toggleCart}>
          <FaShoppingCart />
          <span id="cart-count">{cartCount}</span>
        </Button>
      </div>

      <h2 className="text-center mb-4">Indian Restaurant Menu</h2>

      {/* Offcanvas component for the vertical side menu */}
      <Offcanvas show={showOffcanvas} onHide={toggleOffcanvas} backdrop={false} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-center mt-5">Menu Categories</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Button className="btn-block mb-2" variant="primary" onClick={() => { setFilter("All"); toggleOffcanvas(); }}>All</Button>
          <Button className="btn-block mb-2" variant="success" onClick={() => { setFilter("Vegetarian"); toggleOffcanvas(); }}>Vegetarian</Button>
          <Button className="btn-block mb-2" variant="danger" onClick={() => { setFilter("Non-Vegetarian"); toggleOffcanvas(); }}>Non-Vegetarian</Button>
          <Button className="btn-block mb-2" variant="warning" onClick={() => { setFilter("Dessert"); toggleOffcanvas(); }}>Dessert</Button>
          <Button className="btn-block mb-2" variant="info" onClick={() => { setFilter("Drinks"); toggleOffcanvas(); }}>Drinks</Button>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Menu Items */}
      <div className="dish-container">
        {filteredItems.map(item => (
          <div className="dish-card" key={item.id}>
            <div className="card h-100">
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">
                  Category: {item.category} <br />
                  Price: ${item.price.toFixed(2)} <br />
                  {item.spicy && <span className="badge bg-danger">Spicy</span>} <br />
                  {item.description && <small>{item.description}</small>} <br />
                  {item.rating && <span>Rating: {item.rating} ⭐</span>}
                </p>
                <Button variant="primary" className="add-to-cart" onClick={() => handleItemClick(item)}>
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for item details */}
      {selectedItem && (
        <Modal show={showModal} onHide={toggleModal}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedItem.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              className="img-fluid mb-3"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <p>Category: {selectedItem.category}</p>
            <p>Price: ${selectedItem.price.toFixed(2)}</p>
            <p>{selectedItem.description}</p>

            {/* Spiciness Level */}
            <Form.Group controlId="spicinessSelect">
              <Form.Label>Spiciness Level</Form.Label>
              <Form.Control as="select" value={spiciness} onChange={e => setSpiciness(e.target.value)}>
                <option value="Mild">Mild</option>
                <option value="Medium">Medium</option>
                <option value="Hot">Hot</option>
              </Form.Control>
            </Form.Group>

            {/* Quantity Input */}
            <Form.Group controlId="quantityInput">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                min="1"
                value={quantity}
                onChange={e => setQuantity(e.target.value)}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={toggleModal}>
              Close
            </Button>
            <Button variant="primary" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      {/* Cart Modal */}
      <Cart 
        cart={cart} 
        show={showCart} 
        handleClose={toggleCart} 
        removeFromCart={removeFromCart} 
        increaseQuantity={increaseQuantity} 
        decreaseQuantity={decreaseQuantity} 
      />
    </div>
  );
};

export default Menu;
