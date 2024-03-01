
import { useContext } from "react";
import { Layout } from "../../Components/Layout/Layout"
import { ShoppingCartContext } from "../../Context/Context";
import { OrderCard } from "../../Components/OrderCard/OrderCard";
import { Link } from "react-router-dom";

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  let pathIndex = currentPath.substring(currentPath.lastIndexOf("/") + 1);
  if (pathIndex === "last") pathIndex = context.order?.length -1;
  
  return (
    <>
      <Layout>
      <div className="flex items-center justify-center relative w-80 mb-5">
          <Link to={'/my-orders'} className="absolute left-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          </Link>

          <p className="text-white">MyOrder</p>

        </div>
        <div className='px-6 mt-3 bg-neutral-700 border-2  border-white rounded-lg w-5/12 overflow-y-auto flex flex-col'>
          {
            context.order?.[pathIndex]?.products.map(product => (
              <OrderCard
                key={product.id}
                id={product.id}
                title={product.title}
                imageUrl={product.images}
                price={product.price}
              />
            ))
          }
        </div>
      </Layout>
    </>
  )
}

export { MyOrder }
