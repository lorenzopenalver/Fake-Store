/* import { v4 as uuidv4 } from 'uuid';
 */import { useContext } from "react";
import { Layout } from "../../Components/Layout/Layout"
import { OrdersCard } from "../../Components/OrdersCard/OrdersCard"
import { ShoppingCartContext } from "../../Context/Context";
import { Link } from "react-router-dom";

function MyOrders() {
  const context = useContext(ShoppingCartContext);
/*   let id = Math.random().toString(16).slice(4) */
  return (
    <>
      <Layout>
       <h1 className="mb-4 text-white">My Orders</h1>
        {
          context.order.map((order, index) => 
            { 
              return (
            
            <Link  key={index} to={`/my-orders/${index}`}>
              <OrdersCard
                totalPrice={order.totalPrice}
                totalProducts={order.totalProducts}
              />
            </Link>

          )})
        }
      </Layout>
    </>
  )
}

export { MyOrders }
