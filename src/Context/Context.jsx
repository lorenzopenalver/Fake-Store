import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'


const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({ children }) => {
    //API Link
    const API = "https://api.escuelajs.co/api/v1/"
      
    //Consumo de API
    useEffect(()=>{
        fetch(API + "products")
        .then(res => res.json())
        .then(data => setItems(data))
    },[])
    
    //Get Products by Title
    const [searchByTitle, setSearchByTitle] = useState(null)

    

    //Get Products
    const [items, setItems] = useState(null)
    
    const [filteredItems, setFilteredItems] = useState(null)

    const filteredItemsByTitle = (items, searchByTitle)=> {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    useEffect(()=>{
        if (searchByTitle) {
            setFilteredItems(filteredItemsByTitle(items, searchByTitle))
        }
    },[items, searchByTitle])
console.log(items);

    // ShoppingCart · Increment Quantity
    const [count, setCount] = useState(0);
    // ShoppingCart · Add Cart Products
    const [cartProducts, setCartProducts] = useState([]);

    // ShoppingCart · Order
    const [order, setOrder] = useState([]);
     // ShoppingCart · Order Count
     const [id, setId] = useState(0);
    // Product Detail · Open/Close

    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);
    // Checkout Side Menu · Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    // Product Detail · Show Product
    const [productToShow, setProductToShow] = useState({
        title: "",
        price: "",
        description: "",
        images: [],
    });
   

    ShoppingCartProvider.propTypes = {
        children: PropTypes.node.isRequired,
    }
    return (
        <ShoppingCartContext.Provider value={{
            count,
            isProductDetailOpen,
            cartProducts,
            productToShow,
            setCount,
            openProductDetail,
            closeProductDetail,
            setIsProductDetailOpen,
            setProductToShow,
            setCartProducts,
            isCheckoutSideMenuOpen,
            setIsCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            id,
            setId,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems
            
        }}>
            {
                children
            }
        </ShoppingCartContext.Provider>)
}


export { ShoppingCartProvider, ShoppingCartContext }


