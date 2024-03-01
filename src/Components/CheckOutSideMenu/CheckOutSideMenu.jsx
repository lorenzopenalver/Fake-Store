import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context/Context";
import { OrderCard } from "../OrderCard/OrderCard";
import { totalPrice } from "../../Utils/TotalPrice";
import "./CheckOutSideMenu.css"



const CheckOutSideMenu = () => {
    const context = useContext(ShoppingCartContext);
    const handDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
        context.setCount(context.count - 1)
    }
    const handleCheckOut = () => {
        console.log(context.cartProducts.length );
        if (context.cartProducts.length == 0) {
           return console.log("No");
        }else{
            const orderToAdd = {
                date: "01.02.23",
                products: context.cartProducts,
                totalProducts: context.cartProducts.length,
                totalPrice: totalPrice(context.cartProducts)
            }
            context.setOrder([...context.order, orderToAdd])
            context.setIsCheckoutSideMenuOpen(false)
            context.setSearchByTitle(null)
            context.setCartProducts([])
        }
        
    }
    return (
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 rounded-lg bg-white border border-gray-500 overflow-y-auto`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">My Order</h2>
                <button onClick={() => context.closeCheckoutSideMenu()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            </div>
            <div className='overflow-y-auto flex-1'>
                {
                    context.cartProducts.map(product => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}
                            handDelete={handDelete}
                        />
                    ))
                }
            </div>
            <div className="px-6 bg-slate-500">
                <p className="flex justify-between items-center my-1">
                    <span className='text-sm font-medium'>
                        Total:
                    </span>
                    <span className='text-lg font-semibold'>
                        ${
                            totalPrice(context.cartProducts)}
                    </span>
                </p>
                <Link to={`${context.cartProducts.length > 0? "/my-orders/last": "/"}`}>

                    <button className='bg-slate-600 rounded-lg border border-slate-950  py-1 px-2 w-full text-white mb-4' onClick={() => {
                        handleCheckOut()
                    }
                        }>Add To Cart</button>
                </Link>
            </div>
        </aside>

    )
}

export { CheckOutSideMenu }