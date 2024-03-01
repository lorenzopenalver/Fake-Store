import { useContext } from "react";
import "./ProductDetail.css"
import { ShoppingCartContext } from "../../Context/Context";



const PorductDetail = () => {
    const context = useContext(ShoppingCartContext);
    const data = context.productToShow
    return (
        <aside className={`${context.isProductDetailOpen? 'flex':'hidden'} product-detail  flex-col fixed right-0 rounded-lg bg-white border border-gray-500 overflow-y-auto`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Detail</h2>
                <button onClick={()=> context.closeProductDetail()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            </div>
            <figure>
                <img className="w-full h-full rounded-lg" src={data.images[0]? data.images[0]:""} alt={data.title} />
            </figure>
            <p className='justify-between flex p-3'>
                <span className="font-medium text-2xl">${data.price}</span>
                <span className="font-medium text-md">{data.title}</span>
            </p>
            <p className='font-ligth text-sm p-3 pb-7'>
            {data.description}
            </p>
        </aside>
    )
}

export { PorductDetail }