"use client";

import { createContext, useState, useContext, useEffect } from "react";
import { detectUserLocation, getPricingForRegion } from "@/services/locationService";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [isLocationLoading, setIsLocationLoading] = useState(true);

  // Load cart from localStorage on initial renders
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Detect user location on component mount
  useEffect(() => {
    const detectLocation = async () => {
      try {
        setIsLocationLoading(true);
        const location = await detectUserLocation();
        setUserLocation(location);
        
        // Save location to localStorage for persistence
        localStorage.setItem('userLocation', JSON.stringify(location));
      } catch (error) {
        // Try to load from localStorage as fallback
        const savedLocation = localStorage.getItem('userLocation');
        if (savedLocation) {
          setUserLocation(JSON.parse(savedLocation));
        } else {
          // Default to international
          setUserLocation({
            country: 'International',
            countryCode: null,
            region: 'international',
            pricing: 'international'
          });
        }
      } finally {
        setIsLocationLoading(false);
      }
    };

    detectLocation();
  }, []);

  const addToCart = (item) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id);
      if (existingItem) {
        return prevItems.map(i =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      }
      return [...prevItems, item];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId, quantity) => {
    if (quantity < 1) return;
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    if (!userLocation) return 0;
    
    return cartItems.reduce((total, item) => {
      switch (userLocation.pricing) {
        case 'ghana':
          return total + (item.ghanaPrice * item.quantity);
        case 'africa':
          return total + (item.africaPrice * item.quantity);
        case 'international':
        default:
          return total + (item.internationalPrice * item.quantity);
      }
    }, 0);
  };

  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  const getItemPrice = (item) => {
    if (!userLocation) return item.internationalPrice;
    
    switch (userLocation.pricing) {
      case 'ghana':
        return item.ghanaPrice;
      case 'africa':
      case 'international':
      default:
        return item.internationalPrice;
    }
  };

  const getPriceDisplay = (item) => {
    if (!userLocation) return `$${item.internationalPrice}`;
    
    const price = getItemPrice(item);
    const pricing = getPricingForRegion(userLocation.pricing);
    
    return `${pricing.symbol}${price}`;
  };

  const getTotalDisplay = () => {
    const total = getCartTotal();
    if (!userLocation) return `$${total.toFixed(2)}`;
    
    const pricing = getPricingForRegion(userLocation.pricing);
    return `${pricing.symbol}${total.toFixed(2)}`;
  };

  const value = {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartCount,
    userLocation,
    isLocationLoading,
    getItemPrice,
    getPriceDisplay,
    getTotalDisplay
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}; 