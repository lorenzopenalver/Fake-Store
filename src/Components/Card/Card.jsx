import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/Context";


const Card = (data) => {
    const dataName = data.data
    const context = useContext(ShoppingCartContext);

    const showProduct = (productDetail) => {
        context.openProductDetail();
        context.closeCheckoutSideMenu();
        context.setProductToShow(productDetail)
    }
    const addProductsToCart = (ProductData) => {
        context.setCartProducts([...context.cartProducts, ProductData])
        context.openCheckoutSideMenu();
        context.closeProductDetail();

        context.setCount(context.count + 1)
    }
    const renderIcon = (id) => {
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0

        if (isInCart) {
            return (
            <button className="absolute top-0 right-0 flex justify-center items-center bg-white w-8 h-8 rounded-full m-2"
            onClick={(e)=>  e.stopPropagation()}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>


            </button>
               
            )
        } else {
            return(
                <button className="absolute top-0 right-0 flex justify-center items-center bg-white w-8 h-8 rounded-full m-2"
                onClick={(e) => {
                    e.stopPropagation()
                    addProductsToCart(dataName)
                }

                }
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

            </button>
            )
        }


    }

    return (
        <div onClick={() => showProduct(dataName)} className="cursor-pointer bg-slate-100 w-56 h-60 rounded-lg shadow-white shadow-md text-black text-sm">
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 text-xs rounded-lg m-2 px-3 py-0.5'>{dataName.category.name}</span>
                <img className="w-full h-full rounded-t-lg object-cover" src={dataName.images[0]} alt="headphones" />
                {renderIcon(dataName.id)}
                <p className="flex justify-between p-2">
                    <span className="text-sm font-light">{dataName.title}</span>
                    <span className="text-lg font-medium">${dataName.price}</span>
                </p>
            </figure>
        </div>
    );
};


export { Card }